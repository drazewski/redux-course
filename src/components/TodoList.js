import React, {Component} from 'react'; 
import { connect } from "react-redux";
import { isComplete } from "../actions/todoAction"
import { fetchTodos } from "../actions/fetchTodosAction"

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return(
      <div className="todo-list">
        <ul>
      {
          this.props.todo.todos.map(todo => (
          <li key={todo.id} >
              <input type="checkbox" onClick={() => isComplete(todo.id)} defaultChecked={todo.isComplete} />
            {todo.name}
            
          </li>
          ))
      }
      </ul>
      </div>
    )
  }
}

export default connect(
  (state) => ({ todo: state.todo }),
  { isComplete, fetchTodos }
)(TodoList)
