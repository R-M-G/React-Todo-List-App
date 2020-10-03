import React, { Component } from 'react';
import Todos from './components/Todos/Todos';

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

  markComplete = (id) => {
    this.setState( {todos: this.state.todos.map(todo => {
      if(todo.id === id) {
  todo.completed = !todo.completed
}
return todo;
    }) });
  }



  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
