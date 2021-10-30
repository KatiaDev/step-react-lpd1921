import React from "react";
import { useParams, useHistory, useRouteMatch, Route } from "react-router";
import { Link } from "react-router-dom";

const Avenger = ({ avengersList }) => {
  const params = useParams();
  console.log("params", params);

  const history = useHistory();
  console.log("history: ", history);

  const details = useRouteMatch();
  console.log("details: ", details);

  const foundAvenger = avengersList.find((avenger) => {
    return String(avenger.id) === params.avengerId;
  });

  console.log("foundAvenger: ", foundAvenger);

  return (
    <div>
      <div className="character-info-wrapper">
        <button onClick={() => history.push("/")}>Go Back</button>
        <h1>{foundAvenger.name}</h1>
        <h2>{foundAvenger.nickname}</h2>
        <img className="character-image" src={foundAvenger.img} alt="avenger" />
        <p>{foundAvenger.description}</p>

        <Link to={`${details.url}/movies`}>Show Movies</Link>
        <Route path={`${details.url}/movies`}>
          <ul style={{ listStyle: "none", marginRight: "35px" }}>
            {foundAvenger.movies.map((movie, index) => {
              return <li key={index}>{movie}</li>;
            })}
          </ul>
        </Route>
      </div>
    </div>
  );
};

export default Avenger;
