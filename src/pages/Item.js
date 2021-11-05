import React from "react";
import { useParams } from "react-router";

const Item = ({ books }) => {
  const params = useParams();

  const foundBook = {};

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
            /*onClick={() => addItem(foundBook)}*/ className="product-button"
          >
            Add to cart
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
