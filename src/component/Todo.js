import React from 'react'

const Todo = ({todos, removeTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => (
            <div className="collection-item" key={todo.id}>
                <span onClick={() => removeTodo(todo.id)}>{todo.content}</span>
            </div>
        ))
    ) : (
        <h5 className="center">You have no todo's left... add new one</h5>
    )
    return (
        <div className="todo collection">
            {todoList}
        </div>
    )
}
export default Todo