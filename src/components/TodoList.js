import React from 'react';

export default (props) => (

  <div className="todo-list">
		{
				props.todosListProps.map(todo => (
        <li key={todo.id}>
            <input type="checkbox" defaultChecked={todo.isComplete} />
          {todo.name}
          </li>
				))
		}
		</div>
);

