import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Todos from './components/Todos'
import Addtodo from "./components/Addtodo";
import Header from './components/layout/Header'
import About from "./components/pages/About";
import {v4 as uuid} from 'uuid'
import './App.css';

class App extends Component {
  state = {
    // todos: [
    //   {
    //     id: uuid(),
    //     title: 'Title 1',
    //     completed: false
    //   },
    //   {
    //     id: uuid(),
    //     title: 'Title 2',
    //     completed: true
    //   },
    //   {
    //     id: uuid(),
    //     title: 'Title 3',
    //     completed: false
    //   },
    // ]
    todos : []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({todos: res.data})
      })
  }


  markCompleted = (id) => {
    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed

      }
      return todo
    })
  })
  }

  removeTodo = (id) => {
    // this.setState({ todos: this.state.todos.filter(x => {
    //   return x.id != id
    // })})
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
          this.setState({ todos: this.state.todos.filter(x => {
          return x.id != id
        })})
      }).catch(err => alert('Unable to remove todo'))
  }

  newTodo = (title) => {
    // const newtodo = {
    //   id: uuid(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newtodo]})

    // With Axios
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data]}))
      .catch(err => alert('Unable to add todo'))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <Addtodo newTodo = {this.newTodo}/>
              <Todos todos={this.state.todos} markCompleted = {this.markCompleted} removeTodo = {this.removeTodo}/>
            </React.Fragment>  
          )} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}



export default App;
