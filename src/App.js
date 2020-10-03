import React, { Component } from 'react';
import Todos from './components/Todos/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Buy milk',
        completed: true,
      },
      {
        id: 2,
        title: 'Get gas',
        completed: false,
      },
      {
        id: 3,
        title: 'Mow lawn',
        completed: true,
      },
      {
        id: 4,
        title: 'Clean out garage',
        completed: true,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
