import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import { bindActionCreators } from 'redux'
import {updateCurrent} from "./reducers/todo.js";


const actions = bindActionCreators({updateCurrent}, store.dispatch)


ReactDOM.render(
 <Provider store={store}>
		<App changeCurrent={actions.updateCurrent}/>
 </Provider>, 
 document.getElementById('root')
 );

registerServiceWorker();
