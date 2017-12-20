import { combineReducers } from 'redux';
import todo from './reducers/todo';
import click from './reducers/click';


/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  todo,
  click
});
//console.log()
export default AppReducer;
