import React, { Component } from 'react';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import AddTodo from './/components/AddTodo/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Buy milk',
        completed: false,
      },
      {
        id: 2,
        title: 'Get gas',
        completed: false,
      },
      {
        id: 3,
        title: 'Mow lawn',
        completed: false,
      },
      {
        id: 4,
        title: 'Clean out garage',
        completed: false,
      },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
