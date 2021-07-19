import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [previousPageUrl, setPreviousPageUrl] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");

  useEffect(() => {
    let mounted = true;
    getPokemon();
    if (mounted) {
      setIsLoading(true);
    }

    return () => (mounted = false);
  }, [currentPageUrl]);

  const getPokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();

    setIsLoading(false);
    setNextPageUrl(data.next);

    setPreviousPageUrl(data.previous);
    setPokemon(data.results.map((p) => p.name));
    console.log(nextPageUrl);
    console.log(previousPageUrl);
  };

  if (isLoading) return <div className="container">Loading...</div>;

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPreviousPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  return (
    <div className="container">
      {<PokemonList pokemon={pokemon} />}
      <div>
        <Pagination
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
        />
      </div>
    </div>
  );
}

export default App;
