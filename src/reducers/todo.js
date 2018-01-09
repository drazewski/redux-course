import { isComplete } from "../actions/todoAction";

//import { index } from '../actions/todoAction';
 
const initState = {
	todos: [],
  currentTodo: ''
}

export default (state = initState, action) => {
  
	switch (action.type) {
		case 'TODO_APP':
      return state;
    case 'CURRENT_UPDATE':
      return {...state, currentTodo: action.value};
    case 'TODOS_LOAD':
      return {...state, todos: action.payload};
    case 'IS_COMPLETE':
      let newTodos = state.todos.map((item, index) => {
        if (index !== action.ids) {
          return item;
        }
        return {
          ...item,
         isComplete: ! item.isComplete
        };
      })
      return {...state, todos: newTodos}
    default: 
      return state;
  }
}