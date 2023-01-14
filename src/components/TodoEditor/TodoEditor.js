import React, { Component } from 'react';

// создаем отдельно едитор, чтобы хранить временное состояние, пока набираем
class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    // reset:
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {' '}
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export default TodoEditor;
