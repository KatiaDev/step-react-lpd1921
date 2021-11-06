import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Item from "./pages/Item";
import ItemsList from "./pages/ItemsList";
import { BooksContext } from "./contexts/booksContext";
import { useContext } from "react";

function App() {
  /// Consumer - aici se consuma datele din context
  const { books } = useContext(BooksContext);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
        <Route path="/items/:itemId">
          <Item books={books} />
        </Route>
        <Route path="/items">
          <ItemsList books={books} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
