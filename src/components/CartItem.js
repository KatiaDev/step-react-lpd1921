import React from "react";

const CartItem = (props) => {
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
          //   onClick={() => removeItem(props.isbn13)}
          className="shopping-cart_item-button"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
