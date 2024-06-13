import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const handleCreateRecipe = (newRecipe) =>{
    setRecipes([...recipes, newRecipe]);
  }
  
  const handleDeleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />
      <RecipeCreate onCreateRecipe={handleCreateRecipe} />
    </div>
  );
}

export default App;
