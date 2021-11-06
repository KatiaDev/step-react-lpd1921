import React from "react";
import { useParams } from "react-router";
import { BooksContext } from "../contexts/booksContext";
import { useContext } from "react";

const Item = ({ books }) => {
  const { addItem } = useContext(BooksContext);

  const params = useParams();
  console.log("params: ", params);

  const foundBook = books.find((book) => {
    return book.isbn13 === params.itemId;
  });

  console.log("foundBook", foundBook);

  return (
    <div className="product">
      {foundBook ? (
        <div>
          <img
            src={foundBook.image}
            alt={`${foundBook.title} book`}
            className="product-image"
          />
          <a href={foundBook.url}>{foundBook.url}</a>

          <h2>{foundBook.title}</h2>
          <h3>{foundBook.price}</h3>
          <p>{foundBook.subtitle}</p>

          <button onClick={() => addItem(foundBook)} className="product-button">
            Add to cart
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
