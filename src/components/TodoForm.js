import React, { Component } from "react";
import { Input, Button, Box, Stack } from "@chakra-ui/react";

class TodoForm extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ inputValue: event.target.value });
    console.log("inputValue:", this.state.inputValue);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <Box
        style={{
          width: "500px",
          marginLeft: "200px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <form onSubmit={this.handleFormSubmit}>
          <Input
            type="text"
            placeholder="Add todo..."
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Stack spacing={4} direction="row" align="center">
            <Button colorScheme="blue" type="submit" size="sm">
              Add Todo
            </Button>
            <Button
              colorScheme="red"
              onClick={() => this.props.removeTodo()}
              size="sm"
            >
              Remove Todo
            </Button>
          </Stack>
        </form>
      </Box>
    );
  }
}

export default TodoForm;
