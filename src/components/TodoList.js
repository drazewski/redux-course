import React from 'react'; 
import { connect } from "react-redux";
import { isComplete } from "../actions/todoAction"

const TodoList = (props) => {

    const {isComplete} = props
  return(
    <div className="todo-list">
    {
        props.todo.todos.map(todo => (
        <li key={todo.id} >
            <input type="checkbox" onClick={() => isComplete(todo.id)} defaultChecked={todo.isComplete} />
          {todo.name}
           
        </li>
        ))
    }
    </div>
  )
}

export default connect(
  (state) => ({ todo: state.todo }),
  { isComplete }
)(TodoList)
