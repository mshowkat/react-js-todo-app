import React, { Component } from 'react'
import Todo from "./component/Todo";
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
  render() {
    return (
      <div className='todo-app container center'>
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={this.state.todos} removeTodo={this.deleteTodo} />
      </div>
    )
  }
}


export default App