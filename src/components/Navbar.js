import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <div>
        <h1 className="store-header">Bookstore</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/cart">
          Cart <span>0</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
