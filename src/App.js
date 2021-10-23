import RegisterForm from "./components/RegisterForm";
import { Container, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Container className="App">
      <Heading m="50px" textAlign="center" color="blue.600">
        Register Form:
      </Heading>
      <RegisterForm />
    </Container>
  );
}

export default App;
