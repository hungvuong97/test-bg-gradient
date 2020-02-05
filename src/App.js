import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './Slider'
class App extends Component {
  constructor() {
    super()
    this.state = {
      range: {
        1: {
          offsetX: 15,
          r: 34,
          g: 27,
          b: 32,
          a: 1,
          hex: '#221B20'
        },
        2: {
          offsetX: 50,
          r: 134,
          g: 57,
          b: 62,
          a: 1,
          hex: '#86393E'
        },
      },
      angle: 0
    }
  }

  render() {
    return (
      <div className="App">
        <Slider range={this.state.range} angle={this.state.angle} />
      </div>
    );
  }
}
export default App;