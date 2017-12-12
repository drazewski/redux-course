import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Users from './components/Users';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="wrapper">
          <div className="todo-points">
            <form>
             <TodoForm />
              <TodoList todosListProps={this.props.todosProps}/>
            </form>
          </div>
          <div id="info"></div>
        </div>
      </div>
    );
  }
}


// export class Comp extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Users userProps={this.props.users}/>
//       </div>
//     );
//   }
// }

export const Comp = function (props) {
  return (
    <div className="container">
      <Users userProps={props.users} />
    </div>
  );
};

