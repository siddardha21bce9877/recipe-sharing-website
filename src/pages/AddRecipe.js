import React from "react";
import RecipeForm from "../components/RecipeForm";

const AddRecipe = () => {
  const handleAddRecipe = (recipe) => {
    console.log("New Recipe:", recipe);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add New Recipe</h1>
      <RecipeForm onSubmit={handleAddRecipe} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
};

export default AddRecipe;
