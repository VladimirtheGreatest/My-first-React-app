import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import logo from './logo.svg';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div className="todo-list">
              <h1>To do list app</h1>
              <p>This is my very first React application</p>
                {todoItems}
                  <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default App
