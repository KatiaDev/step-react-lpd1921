import React from "react";
import { Link } from "react-router-dom";

const ItemsList = ({ books }) => {
  return (
    <div className="items-list-wrapper">
      {books.map((item) => (
        <div className="item-card" key={item.isbn13}>
          <Link to={`/items/${item.isbn13}`}>
            <img
              className="items-list-image"
              src={item.image}
              alt={item.title}
            />
          </Link>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
