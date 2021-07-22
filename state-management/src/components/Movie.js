import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Rs. {price}</p>
    </div>
  );
};

export default Movie;
