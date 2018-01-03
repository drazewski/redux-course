import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Counter from './components/Counter'

// import { updateCurrent } from "./actions/todoAction";
// import { increment, decrement } from "./actions/counterAction"
// import { click } from "./actions/clickAction"

import store from './store';

export default class App extends Component {
  
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
              <TodoForm />
              <TodoList />
            </form>
          </div>
          <div id="info" >
          <Counter 
          />
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return state
// }


// export default connect(
//   mapStateToProps,
//   {updateCurrent, decrement, increment, click}
// )(App)