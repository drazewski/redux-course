import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {App, Comp} from './App';
//import SuperSuper from './Super';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import { bindActionCreators } from 'redux'
import {updateCurrent} from "./reducers/todo.js";

// const state = {
//     todos: [
//         { id: 1, name: 'choice 1', isComplete: true },
//         { id: 2, name: 'choice 2', isComplete: true },
//         { id: 3, name: 'choice 3', isComplete: true }
//     ] 
// };

const usersList = {
    users: [
        { name: 'Antek', age: 40 },
        { name: 'Wacek', age: 28 },
        { name: 'Magda', age: 30 },
        { name: 'Heniek', age: 22 } 
    ]
};

const Element = function(dupa) {

    var style = {
        color: dupa.color
    }

    return (
        <h1 style={style}>{dupa.title}</h1>
    );
}

const customElementName = 'super-super';
var playerElement = document.createElement(customElementName);

document.querySelector('body').appendChild(playerElement);
document.querySelector('super-super').innerHTML = 'To jest super element gdzies na dole';
document.querySelector('super-super').setAttribute('id', 'dad');
customElements.whenDefined('super-super').then(() => {
    console.log('app-drawer defined');
});
const actions = bindActionCreators({updateCurrent}, store.dispatch)
//const todoChangeHandler = (val) => store.dispatch(updateCurrent(val));
const render = () => {
    const state = store.getState();
    ReactDOM.render(<App todos={state.todos} currentTodo={state.currentTodo} changeCurrent={actions.updateCurrent}/>, document.getElementById('root'));
} 
render()

store.subscribe(render);

ReactDOM.render(<Element title='Taki sobie tytuł' color="#fa0"/>, document.getElementById('info'));

ReactDOM.render(<Comp users={usersList.users} />, document.getElementById('content'));
registerServiceWorker();
