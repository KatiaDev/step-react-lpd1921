import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state);

  const getCartTotal = cartItems
    .reduce((acc, curr) => {
      const price = curr.price.split("$").find((el) => {
        return el;
      });

      return acc + parseFloat(price);
    }, 0)
    .toFixed(2);

  return (
    <div className="shopping-cart">
      {cartItems.map((item) => {
        return <CartItem key={item.isbn13} {...item} />;
      })}
      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal}</p>
        <button className="shopping-cart__checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
