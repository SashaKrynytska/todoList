import React from 'react';
import './TodoList.css';

export const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li className="ToDoList__item" key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="ToDoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
