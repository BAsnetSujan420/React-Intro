import React from "react";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "https://api.icndb.com/jokes/random";

  const [joke, setJoke] = useState();

  useEffect(() => {
    generateJoke();
  }, []);

  const generateJoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJoke(data.value.joke));
  };

  return (
    <div className="box">
      <h2>Chuck Norris Jokes Generator</h2>
      <p dangerouslySetInnerHTML={{ __html: joke }} />
      <button onClick={generateJoke}>
        Get new joke <span role="img" aria-label="laugh emoji"></span>
      </button>
    </div>
  );
}

export default App;
