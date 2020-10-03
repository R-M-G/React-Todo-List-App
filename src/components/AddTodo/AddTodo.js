import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: '',
  };

  onFormChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onFormChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    
  };

export default AddTodo;
