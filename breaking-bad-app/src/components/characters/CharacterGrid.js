import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharachterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <CharacterItem key={character.char_id} character={character} />
      ))}
    </section>
  );
};

export default CharachterGrid;
