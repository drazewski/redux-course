import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Counter from './components/Counter'

// import { updateCurrent } from "./actions/todoAction";
// import { increment, decrement } from "./actions/counterAction"
// import { click } from "./actions/clickAction"

import store from './store';

class App extends Component {

  constructor() {
    super();
    this.state = { say: "" };
  }

  update(e) {
   this.setState({say: this.a.value});
   console.log(this.a);
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
            <form onSubmit={event => { event.preventDefault(); }} > 
              <TodoForm />
              <TodoList />
            </form>
          </div>
          <div>
            Co chcesz powiedziec: <input type="text" ref={(node) => {this.a = node}} onChange={this.update.bind(this)} />
            {this.state.say}
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

// export default App

// function mapStateToProps(state) {
//   return state
// }

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(
  mapStateToProps,
)(App)