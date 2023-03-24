import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    return (
      <li className="todoitem">
        <span>{this.props.todo.content}</span>
        <button onClick={() => this.props.handleDelete(this.props.todo.id)}>
          delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
