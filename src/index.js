import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
//import CounterProvider from "./contexts/counterContext";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CounterReducer from "./reducers/counterReducer";

const store = createStore(CounterReducer);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
