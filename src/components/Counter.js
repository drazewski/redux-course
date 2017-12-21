import React, { Component } from 'react';

class Counter extends Component {
	constructor() {
		super();
  }
  render() {
    return(
      <div>
        <h1 style={console.log(this.props.value)}>{this.props.value}</h1>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}
export default Counter;