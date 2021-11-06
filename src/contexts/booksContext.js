import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  console.log("cartItems", cartItems);
  console.log("books", books);
  useEffect(() => {
    axios("https://api.itbook.store/1.0/search/react/2").then((response) =>
      setBooks(response.data.books)
    );
  }, []);

  const addItem = (item) => {
    const newItem = cartItems.find((el) => {
      return item.isbn13 === el.isbn13;
    });

    const nextItem = books.find((el) => {
      return item.isbn13 === el.isbn13;
    });

    if (!newItem) {
      return setCartItems([...cartItems, nextItem]);
    } else {
      alert("Item already added to cart.");
    }
  };

  const removeItem = (id) => {
    const filteredItems = cartItems.filter((item) => {
      return item.isbn13 !== id;
    });

    return setCartItems(filteredItems);
  };

  const value = {
    books,
    addItem,
    removeItem,
    cartItems,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
