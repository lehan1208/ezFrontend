import React from 'react';

function TodoList({ todos, onTodoClick }) {
  const handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };

  return (
    <ul className='todo-list'>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}
    </ul>
  );
}

export default TodoList;
