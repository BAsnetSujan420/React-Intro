import React, { useContext } from "react";
import { MovieContext } from "../movie_context";

const Navigation = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h3>My Movies</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Navigation;
