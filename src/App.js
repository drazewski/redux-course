import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
//import { bindActionCreators } from 'redux'
import {updateCurrent} from "./reducers/todo.js";
//import Users from './components/Users';

class App extends Component {
  constructor() {
    super();
    //this.state = { text: 'Not clicked!' };
  }

  // onButtonClick() {
  //   this.setState({ text: 'Clicked!' });
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
       {// <p onClick={this.onButtonClick.bind(this)}>{this.state.text}</p>
       }
        </header>
        <div className="wrapper">
          <div className="todo-points">
            <form onSubmit={event => { event.preventDefault(); }} > 
             <TodoForm currentTodo={this.props.currentTodo} changeCurrent={this.props.updateCurrent}/>
              <TodoList todosListProps={this.props.todo.todos}/>
            </form>
          </div>
          <div id="info" className={console.log(this.props)}></div>
        </div>
      </div>
    );
  }
}


export default connect(
  (state) => state,
  {updateCurrent}
)(App)