import React from "react";
import { BooksContext } from "../contexts/booksContext";
import { useContext } from "react";

const CartItem = (props) => {
  const { removeItem } = useContext(BooksContext);

  return (
    <div className="shopping-cart_item">
      <img
        src={props.image}
        alt={`${props.title} book`}
        className="shopping-cart_item-img"
      />

      <div>
        <h1 className="shopping-cart__title">{props.title}</h1>
        <p>{props.price}</p>
        <button
          onClick={() => removeItem(props.isbn13)}
          className="shopping-cart_item-button"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
