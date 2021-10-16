import React, { Component } from "react";

class FakeTodos extends Component {
  state = {
    fakeTodosList: [],
    isButtonCliked: false,
  };

  //componentDidMount() - useEffect(()=>{})
  //componentDidUpdate() - useEffect(()=> [dependencies])
  //componentWillUnmount() - useEffect((return)=>[])

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => this.setState({ fakeTodosList: json }));

    console.log(" COMPONENT DID MOUNT!!!");
  }

  componentDidUpdate() {
    if (this.state.isButtonCliked) {
      console.log("COMPONENT DID UPDATE!!!");
    }
  }

  render() {
    // console.log("fakeTodos: ", this.state.fakeTodosList);
    return (
      <>
        <h1>Fake Todos: </h1>

        <button onClick={() => this.setState({ isButtonCliked: true })}>
          Click Me
        </button>
        {this.state.fakeTodosList.map((todo) => {
          return (
            <div key={todo.id} style={{ margin: "50px" }}>
              <p>
                <strong>Title:</strong> {todo.title}
              </p>
              <p>
                <strong>Completed: </strong>
                {todo.completed ? "true" : "false"}
              </p>
            </div>
          );
        })}
      </>
    );
  }
}

export default FakeTodos;
