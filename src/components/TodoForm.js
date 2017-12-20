import React from 'react';

export default (props) => { 
  const{currentTodo, changeCurrent} = props
  
  return(
    <div>
      <input type="text" onChange={event => { const val = event.target.value; changeCurrent(val) }} val={currentTodo}/> <br></br>
    </div>
  )
}
