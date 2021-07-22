import React from "react";
import { useState, createContext } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Wild Pear Tree", price: "250", id: 433 },
    { name: "Inception", price: "280", id: 456 },
    { name: "Doctor Strange", price: "240", id: 4674 },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
