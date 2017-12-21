import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
//import { bindActionCreators } from 'redux'
import {updateCurrent} from "./reducers/todo.js";
//import Users from './components/Users';
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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="wrapper">
          <div className="todo-points">
            <form onSubmit={event => { event.preventDefault(); }} > 
             <TodoForm currentTodo={this.props.currentTodo} changeCurrent={this.props.updateCurrent}/>
              <TodoList todosListProps={this.props.todo.todos}/>
            </form>
          </div>
          <div id="info" >
          <Counter 
          value={store.getState().counter.clickCounter} 
          onIncrement={() => store.dispatch({type: 'INCREMENT'})}
          onDecrement={() => store.dispatch({type: 'DECREMENT'})}
          />
          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  (state) => state,
  {updateCurrent}
)(App)