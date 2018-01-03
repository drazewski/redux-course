import React from 'react';
import { updateCurrent } from "../actions/todoAction";
import { click } from "../actions/clickAction"
import { connect } from "react-redux";

const TodoForm = (props) => { 
  const{click, currentTodo, updateCurrent} = props
  
  return(
    <div>
      {console.log(props)}
      <input type="text" onClick={click}  onChange={event => { const val = event.target.value; updateCurrent(val) }} val={currentTodo}/> <br></br>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    updateCurrent: state.updateCurrent
  }
}

export default connect(
  mapStateToProps,
  {updateCurrent, click}
)(TodoForm)