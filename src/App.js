import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

class App extends Component {

  state = {
    todos: [
      {id: 1, content: "Buy Milk"},
      {id: 2, content: "Buy Deodorant"}
    ]
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(item => {
      return item.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (item) => {
    item.id = Math.random();
    let todos = [...this.state.todos, item];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="container">
          <h1>My Todo's</h1>
          <TodoList deleteTodo={this.deleteTodo} todos = {this.state.todos} />
          <AddTodo addTodo = {this.addTodo} />
      </div>
    )
  }
}

export default App
