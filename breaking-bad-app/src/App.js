import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import axios from "axios";
import Search from "./components/ui/Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const fetchCharacters = async () => {
    const res = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    setCharacters(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
