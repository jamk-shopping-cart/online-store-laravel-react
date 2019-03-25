import React, { Component } from 'react';

class Counter extends Component {
  render() {
    // console.log('Counter: this.props.count:', this.props.count);
    return <div className="circle w-75 h-75 rounded-circle animated zoomIn">{this.props.count}</div>;
  }
}

export default Counter;
