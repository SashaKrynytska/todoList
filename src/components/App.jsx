import React, { Component } from 'react';
import ToDoList from './ToDoList/TodoList';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Познакомиться с Redux', completed: false },
      { id: 'id-4', text: 'Устроиться на работу', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodosCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    // const completedTodos = todos.filter(todo => todo.completed);
    // console.log(completedTodos.length);

    return (
      <>
        <div className="ToDoList__p">
          <p>Общее количество todo: {totalTodosCount}</p>
          <p>Kоличество выполненных todo: {completedTodosCount}</p>
        </div>
        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
