import React, { Component } from 'react'; 
import { connect } from "react-redux";
import { click } from "../actions/clickAction";
import { increment, decrement } from "../actions/counterAction"

class Counter extends Component {
	
  render() {
    return(
      <div>
        {console.log(this.props)}
        <h1>{this.props.counter.clickCounter}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    counter: state.counter
  }
}

export default connect(
  mapStateToProps,
  { click, increment, decrement }
)(Counter)