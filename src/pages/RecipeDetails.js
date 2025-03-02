import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Recipe Details (ID: {id})</h1>
      <p>More details about the recipe will be displayed here.</p>
    </div>
  );
};

export default RecipeDetails;
