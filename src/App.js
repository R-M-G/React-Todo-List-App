import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import AddTodo from './/components/AddTodo/AddTodo';
import About from './components/Pages/About';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'Buy milk',
      //   completed: false,
      // },
      // {
      //   id: 2,
      //   title: 'Get gas',
      //   completed: false,
      // },
      // {
      //   id: 3,
      //   title: 'Mow lawn',
      //   completed: false,
      // },
      // {
      //   id: 4,
      //   title: 'Clean out garage',
      //   completed: false,
      // },
    ],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => this.setState({ todos: res.data }));
  }

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

  //Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuidv4(),
    //   title,
    //   completed: false,
    // };
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  //   this.setState({
  //     todos: [...this.state.todos, newTodo],
  //   });
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
