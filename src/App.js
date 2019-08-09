import React, { Component } from 'react'
import Todo from "./component/Todo";
import AddTodo from "./component/form";
import "./App.css";

 class App extends Component {
   state= {
     todos : [
       {id: 1, content: 'sample todo'},
       {id: 2, content: 'another todo'}
     ]
   }
   deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => todo.id !== id )
     this.setState({
       todos
     })
   }
   addtodo = (todo) => {
     todo.id = Math.random()
     let todos = [...this.state.todos, todo]
     this.setState({
       todos
     })
   }
  render() {
    return (
      <div className='todo-app container center'>
        <h1 className="center green-text">Things to do :</h1>
        <AddTodo addtodo={this.addtodo} />
        <Todo todos={this.state.todos} key={this.id} removeTodo={this.deleteTodo} />
      </div>
    )
  }
}


export default App