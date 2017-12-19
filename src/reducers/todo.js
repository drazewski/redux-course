const initState = {
	todos: [
		 { id: 1, name: 'choice 11', isComplete: true },
		 { id: 2, name: 'choice 2', isComplete: true },
		 { id: 3, name: 'choice 3', isComplete: true }
   ],
   currentTodo: ''
}

export const updateCurrent = (val) => ({ type: 'CURRENT_UPDATE', payload: val })

export default (state = initState, action) => {
  
	switch (action.type) {
		case 'TODO_APP':
      return state;
    case 'CURRENT_UPDATE':
      return {...state, currentTodo: action.payload};
      
    default: 
      return state;
  }
  
}