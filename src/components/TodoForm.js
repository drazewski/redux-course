import React from 'react';

export default (props) => { 
  const{click, currentTodo, changeCurrent} = props
  
  return(
    <div>
      {console.log('renderuje todoform')}
      <input type="text" onClick={click}  onChange={event => { const val = event.target.value; changeCurrent(val) }} val={currentTodo}/> <br></br>
    </div>
  )
}
