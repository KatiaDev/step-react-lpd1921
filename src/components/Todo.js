import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{
              textDecoration: this.props.todo.completed
                ? "line-through"
                : "none",
            }}
            onClick={() => this.props.markAsCompleted(this.props.todo.id)}
          >
            {this.props.todo.task}
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;
