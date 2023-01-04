import React from 'react';
import './TodoList.css';

export const ToDoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li className="ToDoList__item" key={id}>
        <p className="ToDoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
