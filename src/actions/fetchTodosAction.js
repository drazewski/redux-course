import {getTodos} from "../lib/todoServices"

export const TODOS_LOAD = 'TODOS_LOAD'

export const fetchTodos = () => {
	return (dispatch) => {
		getTodos()
		.then(todos => dispatch(loadTodos(todos)))
	}
}

export const loadTodos = (todos) => {
  return{
    type: TODOS_LOAD,
    payload: todos
  }
}