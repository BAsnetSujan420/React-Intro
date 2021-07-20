import React from "react";
import classes from "./Recipes.module.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={classes.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p> Calories: {calories}</p>
      <img className={classes.image} src={image} alt="recipe" />
    </div>
  );
};

export default Recipes;
