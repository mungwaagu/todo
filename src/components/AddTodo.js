import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = "text" onChange = {this.handleChange} placeholder = "Input new Todo here" id = "content" value = {this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo