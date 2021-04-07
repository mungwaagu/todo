import React from 'react'

const TodoList =({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="hoverable card-panel grey lighter-2" onClick = {() => deleteTodo(todo.id)} key = {todo.id}>
                    <span className = "white-text">{todo.content}</span>
                </div>
            )
        })
    ) : (
        <div className="card-panel red lighter-2">
            <span className="white-text">No Todo's Left</span>
        </div>
    )

    return (
        <div>
            {todoList}
        </div>
        
    )
}

export default TodoList