import React, { Component } from 'react'

export class Addtodo extends Component {
    addTodo = (e) => {
        e.preventDefault()
        // console.log(e.target.newtodo.value)
        this.props.newTodo(e.target.newtodo.value)
        e.target.newtodo.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input type="text" style={inputBox} name="newtodo" placeholder="Enter Todo" />
                    <button style={btn}>Add Todo</button>
                </form>
            </div>
        )
    }
}

const inputBox = {
    width: '80%',
    padding: '8px'
}

const btn = {
    padding: '8px',
    color: '#fff',
    background: "#000"
}

export default Addtodo



