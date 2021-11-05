import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Item from "./pages/Item";
import ItemsList from "./pages/ItemsList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios("https://api.itbook.store/1.0/search/react/2").then((response) =>
      setBooks(response.data.books)
    );
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/cart">
          <ShoppingCart books={books} />
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
