import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Counter from './components/Counter'

import { updateCurrent } from "./actions/todoAction";
import { increment, decrement } from "./actions/counterAction"
import { click } from "./actions/clickAction"

import store from './store';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React  </h1>
          <span style={{color: '#fff'}}> {store.getState().counter.clickCounter}</span>
          
        </header>
        <div className="wrapper">
          <div className="todo-points">
            <form className={console.log(this.props)} onSubmit={event => { event.preventDefault(); }} > 
              <TodoForm click={this.props.click} currentTodo={this.props.currentTodo} changeCurrent={this.props.updateCurrent}/>
              <TodoList todosListProps={this.props.todo.todos}/>
            </form>
          </div>
          <div id="info" >
          <Counter 
          value={this.props.counter.clickCounter} 
          onIncrement={this.props.increment}
          onDecrement={this.props.decrement}
          />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}


export default connect(
  mapStateToProps,
  {updateCurrent, decrement, increment, click}
)(App)