import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
//import smallcounter from './reducers/counterReducer';
//import { bindActionCreators } from 'redux'
import {updateCurrent} from "./reducers/todo.js";
import { increment, decrement } from "./actions/counterAction"
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
          <h1 className="App-title">Welcome to React  </h1>
          <span style={{color: '#fff'}}> {store.getState().counter.clickCounter}</span>
          
        </header>
        <div className="wrapper">
          <div className="todo-points">
            <form className={console.log(this)} onSubmit={event => { event.preventDefault(); }} > 
              <TodoForm currentTodo={this.props.currentTodo} changeCurrent={this.props.updateCurrent}/>
              <TodoList todosListProps={this.props.todo.todos}/>
            </form>
          </div>
          <div id="info" >
          <Counter 
          value={store.getState().counter.clickCounter} 
          onIncrement={() => store.dispatch(increment())}
          onDecrement={() => store.dispatch(decrement())}
          />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    todo: state.todo,
    counter: state.counter
  }
}

//export default App
export default connect(mapStateToProps)(App)

//export default connect(
//   (state) => state,
//   {updateCurrent}
// )(App)