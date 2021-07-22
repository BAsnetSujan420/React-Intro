import React from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import MovieProvider from "./movie_context";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Navigation />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
