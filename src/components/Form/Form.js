import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    licence: false,
  };

  handleChange = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);

    // this.setState({
    //   [e.currentTarget.name]: e.currentTarget.value,
    // });

    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };
  // handleNameChange = evt => {
  //   console.log(evt.currentTarget.value);
  //   this.setState({ name: evt.currentTarget.value });
  // };

  // handleTagChange = evt => {
  //   this.setState({ tag: evt.currentTarget.value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя{' '}
          <input
            type="text"
            name="name"
            id={this.state.id}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Согласен с условием
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
