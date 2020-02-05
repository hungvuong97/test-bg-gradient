import React from 'react';
import "./style.css";
export default class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
        }
    }
    componentWillMount() {
        this.handleAngle()
        this.setState({ angle: this.props.angle })
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     let angle = this.state.angle;
    //     if (angle === nextProps.angle) {
    //         return true;
    //     }
    //     return false;
    // }

    mouseDown = (event) => {
        event.preventDefault();
        const obj = this
        let circle = this.refs.circle;
        let picker = this.refs.picker;
        let rect = circle.getBoundingClientRect();

        let center = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        let transform = (function () {
            let p = 'transform';
            return p
        })();
        picker.style[transform] = `rotate(${this.state.angle - 60}deg)`;

        let rotate = function (x, y) {
            let deltaX = x - center.x;
            let deltaY = y - center.y;
            let angle = Math.round(Math.atan2(deltaY, deltaX) * 180 / Math.PI)
            if (angle < 0) angle = angle + 360;
            return angle
        };


        document.body.style.cursor = 'default'


        let mousemove = (event) => {
            obj.setState({ angle: rotate(event.clientX, event.clientY) });
            obj.handleAngle();
            let deg = rotate(event.clientX, event.clientY) - 55;
            picker.style[transform] = 'rotate(' + deg + 'deg)'
        };

        let mouseup = function () {
            document.body.style.cursor = null;
            document.removeEventListener('mouseup', mouseup)
            document.removeEventListener('mousemove', mousemove)
        };

        mousemove(event)
        document.addEventListener('mousemove', mousemove)
        document.addEventListener('mouseup', mouseup)

    }

    componentDidMount() {

        // pickerCircle.addEventListener('mousedown', mousedown)
        let circle = this.refs.circle;

        circle.addEventListener('mousedown', function (event) {
            if (event.target === document.getElementsByClassName('picker-circle')) this.mouseDown(event)

        })
    }
    componentDidUpdate() {
        let picker = this.refs.circle
        picker.style['transform'] = `rotate(${this.props.angle - 55}deg)`;

    }

    handleAngle = () => {
        this.props.chooseAngle(this.state.angle)
    }

    render() {
        return (
            <div className="circle" ref="circle" style={{
                marginLeft: '100px',
                position: 'relative',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                borderColor: 'blue',
                borderStyle: 'solid'
            }}>
                <div className="picker" ref="picker" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: '30px',
                    marginTop: '-15px',
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transformOrigin: 'center left'
                }}>
                    <div className="picker-circle" style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'blue',
                        margin: '0 3px 0 auto',
                        cursor: 'default'
                    }}
                        onMouseDown={this.mouseDown}>
                    </div>
                </div>
            </div>
        )
    }
}