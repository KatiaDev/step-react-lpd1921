import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import CounterProvider from "./contexts/counterContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
