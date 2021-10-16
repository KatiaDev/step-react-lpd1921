//import TestComponent from './components/TestComponent';
import { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import FakeTodos from "./components/FakeTodos";

const LOCALSTORAGE_KEY = "todos";

class App extends Component {
  constructor() {
    super();
    const localStorageTodos = window.localStorage.getItem(LOCALSTORAGE_KEY);
    this.state = {
      todoList: localStorageTodos ? JSON.parse(localStorageTodos) : [],
      showFakeTodos: false,
    };
  }

  manageLocalStorage = (todos) => {
    const jsonTodos = JSON.stringify(todos);
    window.localStorage.setItem(LOCALSTORAGE_KEY, jsonTodos);
    this.setState({ todoList: todos });
  };

  addTodo = (value) => {
    if (value !== "") {
      const newTodoList = [
        ...this.state.todoList,
        {
          task: value,
          id: Date.now(),
          completed: false,
        },
      ];
      this.manageLocalStorage(newTodoList);
    }
  };

  markAsCompleted = (id) => {
    const updatedTodos = this.state.todoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    return this.manageLocalStorage(updatedTodos);
  };

  removeTodo = () => {
    const filteredTodos = this.state.todoList.filter(
      (todo) => todo.completed === false
    );

    this.manageLocalStorage(filteredTodos);
  };

  render() {
    console.log("todos:", this.state.todoList);
    return (
      <div className="App">
        {/* <TestComponent /> */}
        <div style={{ margin: "30px" }}>
          <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo} />
        </div>
        <button onClick={() => this.setState({ showFakeTodos: true })}>
          Show FakeTodos
        </button>
        {!this.state.showFakeTodos ? (
          <TodoList
            todos={this.state.todoList}
            markAsCompleted={this.markAsCompleted}
          />
        ) : (
          <FakeTodos />
        )}
      </div>
    );
  }
}

export default App;
