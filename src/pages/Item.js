import React from "react";
import { useParams } from "react-router";
import { addItem } from "../actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

const Item = ({ books }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state);

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

          <button
            onClick={() => {
              const newItem = cartItems.find((el) => {
                return foundBook.isbn13 === el.isbn13;
              });

              const nextItem = books.find((el) => {
                return foundBook.isbn13 === el.isbn13;
              });

              if (!newItem) {
                dispatch(addItem(nextItem));
              } else {
                alert("Item already added to cart.");
              }
            }}
            className="product-button"
          >
            Add to cart
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
