import React, { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [todoName, setTodoName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todoName);
  };

  return (
    <div className='container'>
      <form className='form-group ' onSubmit={handleSubmit}>
        <input
          type='text'
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className='form-control '
        />
      </form>
    </div>
  );
}

export default TodoForm;
