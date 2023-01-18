import React from 'react';
const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p className="ToDoList__text">{text}</p>
      <button onClick={onDeleteTodo}>Удалить</button>
    </div>
  );
};

export default Todo;
