import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { FavoritesContext } from "../store/favorite-context";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totoalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>Favorite page</h1>
      {content}
    </section>
  );
};

export default Favorites;
