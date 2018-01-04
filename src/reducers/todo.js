import { isComplete } from "../actions/todoAction";


//import { index } from '../actions/todoAction';
 
const initState = {
	todos: [
		 { id: 1, name: 'choice 11', isComplete: true },
		 { id: 2, name: 'choice 2', isComplete: true },
		 { id: 3, name: 'choice 3', isComplete: true }
   ],
   currentTodo: ''
}

export default (state = initState, action) => {
  
	switch (action.type) {
		case 'TODO_APP':
      return state;
    case 'CURRENT_UPDATE':
      return {...state, currentTodo: action.value};
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