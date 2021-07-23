import React from "react";
import { useState } from "react/cjs/react.development";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const SearchBar = ({ getMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const searchMovie = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    }
    setSearchTerm("");
  };

  return (
    <header>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          placeholder="search"
          className="search"
          value={searchTerm}
          onChange={updateSearch}
        />
      </form>
    </header>
  );
};

export default SearchBar;
