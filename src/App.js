import { Button, Container, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

function App() {
  //const { state, dispatch } = useContext(CounterContext);
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container className="app">
      <Heading as="h1">Counter</Heading>
      <Heading as="h2">{counter}</Heading>
      <div>
        <Button onClick={() => dispatch(increment())} m="5px">
          +
        </Button>
        <Button onClick={() => dispatch(decrement())} m="5px">
          -
        </Button>
      </div>
    </Container>
  );
}

export default App;
