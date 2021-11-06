import React from "react";
import { NavLink } from "react-router-dom";
import { BooksContext } from "../contexts/booksContext";
import { useContext } from "react";

const Navbar = () => {
  const { cartItems } = useContext(BooksContext);
  return (
    <div className="navigation">
      <div>
        <h1 className="store-header">Bookstore</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/cart">
          Cart <span>{cartItems.length}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
