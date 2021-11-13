import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios("https://api.itbook.store/1.0/search/react/2").then((response) =>
      setBooks(response.data.books)
    );
  }, []);

  // const addItem = (item) => {
  //   const newItem = cartItems.find((el) => {
  //     return item.isbn13 === el.isbn13;
  //   });

  //   const nextItem = books.find((el) => {
  //     return item.isbn13 === el.isbn13;
  //   });

  //   if (!newItem) {
  //     return setCartItems([...cartItems, nextItem]);
  //   } else {
  //     alert("Item already added to cart.");
  //   }
  // };

  const value = {
    books,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
