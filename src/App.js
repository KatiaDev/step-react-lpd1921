import { Button, Container, Heading } from "@chakra-ui/react";
import { CounterContext } from "./contexts/counterContext";
import { useContext } from "react";

function App() {
  const { state, dispatch } = useContext(CounterContext);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <Container className="app">
      <Heading as="h1">Counter</Heading>
      <Heading as="h2">{state.counter}</Heading>
      <div>
        <Button onClick={() => increment()} m="5px">
          +
        </Button>
        <Button onClick={() => decrement()} m="5px">
          -
        </Button>
      </div>
    </Container>
  );
}

export default App;
