import React from 'react';

export default (props) => (

  <div className="todo-list">{console.log({props})}
		{
				props.todosListProps.map(todo => (
          <li>
            <input type="checkbox" defaultChecked={todo.isComplete} />
          {todo.name}
          </li>
				))
		}
		</div>
);

