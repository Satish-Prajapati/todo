import React, { Component } from "react";
import TodoItem from './todoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
        <TodoItem key={todo.id} todo = {todo} markCompleted = {this.props.markCompleted} removeTodo = {this.props.removeTodo}/>
      ))
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
