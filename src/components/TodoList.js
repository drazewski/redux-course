import React from 'react'; 
import { connect } from "react-redux";

const TodoList = (props) => {

    //const {todo} = props
  return(
    <div className="todo-list">
    {
        props.todo.todos.map(todo => (
        <li key={todo.id} >
          <input type="checkbox" defaultChecked={todo.isComplete} />
          {todo.name}
           
        </li>
        ))
    }
    </div>
  )
}

export default connect(
  (state) => ({ todo: state.todo })
)(TodoList)
