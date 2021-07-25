import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../store/favorite-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              {favoritesCtx.totalFavorites > 0 && (
                <span className={classes.badge}>
                  {favoritesCtx.totalFavorites}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
