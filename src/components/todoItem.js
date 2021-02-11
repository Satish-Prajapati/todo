import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markCompleted = (e) => {
    //     console.log(this.props)
    // }
    
    render() {
    const {title, id, completed} = this.props.todo;
    const checked = completed ? "true" : "";
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}  checked={checked}/> {" "}
                <span>{title}</span>{" "}
                <input type="button" style={delBtn} value="X" onClick={this.props.removeTodo.bind(this, id)} />
            </div>
        )
    }
}

const delBtn = {
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '4px'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
