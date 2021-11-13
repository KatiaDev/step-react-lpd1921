import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import BooksProvider from "./contexts/booksContext";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CartReducer from "./reducers/cartReducer";

const store = createStore(CartReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BooksProvider>
          <App />
        </BooksProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
