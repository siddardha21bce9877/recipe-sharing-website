import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [recipes] = useState([
    { id: 1, title: "Pasta", description: "A delicious Italian pasta recipe." },
    { id: 2, title: "Chocolate Cake", description: "Rich and creamy chocolate cake." },
  ]);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
