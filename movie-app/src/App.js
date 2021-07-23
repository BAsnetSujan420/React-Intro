import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import SearchBar from "./components/SearchBar";

const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(MOVIE_API);
  }, []);

  const getMovies = async (API) => {
    const result = await fetch(API);
    const data = await result.json();
    console.log(data.results);
    setMovies(data.results);
  };

  return (
    <div className="app">
      <SearchBar getMovies={getMovies} />

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
