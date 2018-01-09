import React, { Component } from 'react'; 
import { connect } from "react-redux";
import { click } from "../actions/clickAction";
import { increment, decrement } from "../actions/counterAction"
import store from '../store';

class Counter extends Component {
	
  render() {
    return(
      <div>
        <h1>{this.props.counter.clickCounter}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <p>{store.getState().counter.clickCounter}</p>
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