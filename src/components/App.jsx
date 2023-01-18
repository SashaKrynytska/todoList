import React, { Component } from 'react';
import ToDoList from './ToDoList/TodoList';
import Form from './Form/Form';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import Reader from './Reader/Reader';
import publications from '../../src/publications.json';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Познакомиться с Redux', completed: false },
      { id: 'id-4', text: 'Устроиться на работу', completed: false },
    ],
    filter: '',
  };

  componentDidMount() {
    console.log('App componentDidMount');
    // перезаписываем state
    const todos = localStorage.getItem('todos'); //вернет строку
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      console.log('Обновилось поле todos, записываю todos в хранилище');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  //обновление с помощью чекбокса
  toggleCompleted = todoId => {
    console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    //   this.setState(prevState => ({
    //     todos: prevState.todos.map(todo =>
    //       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    //     ),
    //   }));
    // };

    //делаем деструктуризацию

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addTodo = text => {
    console.log(text);
    const todo = {
      id: nanoid(),
      text, // если имя свойства и имя переменной в функции одинаковое, достаочно написать без value
      completed: false,
    };

    //add new array with new todo
    // this.setState(prevState => ({
    //   todos: [todo, ...prevState.todos],
    // }));
    // реструктурируем:
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  // changeFilter = filter => {
  //   this.setState({ filter });
  // };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { todos, filter } = this.state;
    // рефакторинг вычисляемых данных
    const totalTodosCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    // const completedTodos = todos.filter(todo => todo.completed);
    // console.log(completedTodos.length);

    const filteredTodos = this.getVisibleTodos();

    return (
      //создаем пропс онсабмит и передаем его через пропс в форму
      <>
        <Reader items={publications} />
        <TodoEditor onSubmit={this.addTodo} />
        <Form onSubmit={this.formSubmitHandler} />
        <div className="ToDoList__p">
          <p>Всего заметок: {totalTodosCount}</p>
          <p>Выполнено: {completedTodosCount}</p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />

        <ToDoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
