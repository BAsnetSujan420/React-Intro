import { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../movie_context";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((previousMovies) => [
      ...previousMovies,
      { name: name, price: price },
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      <div className="form-control">
        <input type="text" name="name" value={name} onChange={updateName} />
      </div>
      <div className="form-control">
        <input
          type="number"
          name="price"
          value={price}
          onChange={updatePrice}
        />
      </div>

      <button className="btn">Submit</button>
    </form>
  );
};

export default AddMovie;
