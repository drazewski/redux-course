import { combineReducers } from 'redux';
import todo from './reducers/todo';
import click from './reducers/click';
import counter from './reducers/counterReducer';


/**
 * Turns different reducing functions into a single reducing function
 */
const Reducers = combineReducers({
  todo,
  click, 
  counter
});
//console.log()
export default Reducers;
