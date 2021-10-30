import React from "react";
import { Link } from "react-router-dom";

const Avengers = ({ avengersList }) => {
  return (
    <>
      <h1>Avengers Page</h1>

      {avengersList.map((avenger) => {
        return (
          <div key={avenger.id} className="characters-list-wrapper">
            <Link to={`/avengers/${avenger.id}`}>
              <div className="character-card">
                <p>{avenger.name}</p>
                <img src={avenger.thumbnail} alt="avenger logo" />
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Avengers;
