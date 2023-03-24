import React from "react";
import TodoItem from "./TodoItem.js";
import "./TodoList.css";
import { createTodo, deleteTodo, getTodos } from "../API/api.js";

class TodoList extends React.Component {
  state = {
    inputText: "",
    todos: [],
  };

  handleInputChange = (e) => {
    this.setState({ inputText: e.target.value });
    console.log(this.state.inputText);
  };

  handleSubmit = () => {
    const newTodo = {
      content: this.state.inputText,
    };

    createTodo(newTodo).then((todo) => {
      this.setState((prev) => {
        return {
          todos: [...prev.todos, todo],
          inputText: "",
        };
      });
    });
  };

  handleDelete = (id) => {
    deleteTodo(id).then(() => {
      this.setState({
        todos: this.state.todos.filter((ele) => {
          return ele.id !== id;
        }),
      });
    });
  };

  render() {
    return (
      <div className="todolist">
        <h1>TodoList</h1>
        <div className="form">
          <input
            className="input"
            onChange={(e) => {
              this.handleInputChange(e);
            }}
            value={this.state.inputText}
          />
          <button
            className="submit-btn"
            onClick={(e) => {
              this.handleSubmit(e);
            }}
          >
            submit
          </button>
        </div>
        <ul className="todo-list">
          {this.state.todos.map((ele) => (
            <TodoItem
              key={ele.id}
              todo={ele}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    getTodos().then((data) => {
      this.setState({
        todos: data,
      });
    });
  }
}

export default TodoList;
