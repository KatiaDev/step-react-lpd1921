import React from "react";
import CartItem from "../components/CartItem";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      {/* <CartItem /> */}
      <div className="shopping-cart__checkout">
        <p>Total: $</p>
        <button className="shopping-cart__checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
