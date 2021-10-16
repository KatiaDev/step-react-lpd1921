import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT!!!");
  }

  render() {
    // console.log(props);
    return (
      <div>
        <h1>My Todos: </h1>
        {this.props.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              markAsCompleted={this.props.markAsCompleted}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
