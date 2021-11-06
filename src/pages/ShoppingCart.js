import React from "react";
import CartItem from "../components/CartItem";
import { BooksContext } from "../contexts/booksContext";
import { useContext } from "react";

const ShoppingCart = () => {
  const { cartItems } = useContext(BooksContext);

  return (
    <div className="shopping-cart">
      {cartItems.map((item) => {
        return <CartItem key={item.isbn13} {...item} />;
      })}
      <div className="shopping-cart__checkout">
        <p>Total: $</p>
        <button className="shopping-cart__checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
