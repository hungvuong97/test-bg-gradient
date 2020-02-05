import React from 'react';
import { SketchPicker } from 'react-color';

export default class SketchPick extends React.Component {
    constructor() {
        super();
        this.state = {
            background: '#fff',
        };


    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };
    render() {
        return (
            <SketchPicker color={this.state.background}
                onChangeComplete={this.handleChangeComplete}></SketchPicker>
        )
    }
}