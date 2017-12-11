import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {App, Comp} from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
    todos: [
        { id: 1, name: 'choice 1', isComplete: true },
        { id: 2, name: 'choice 2', isComplete: true },
        { id: 3, name: 'choice 3', isComplete: true }
    ] 
}

const usersList = {
    users: [
        { name: 'Antek', age: 12 },
        { name: 'Wacek', age: 2 } 
    ]
}

const element = <h1>Hello, world!</h1>;

ReactDOM.render(<App todosProps={state.todos}/>, document.getElementById('root'));

ReactDOM.render(element, document.getElementById('info'));

ReactDOM.render(<Comp users={usersList.users} />, document.getElementById('content'));
registerServiceWorker();
