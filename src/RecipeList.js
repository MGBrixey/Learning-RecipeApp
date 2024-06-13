import React from "react";

function RecipeList({ recipes, onDeleteRecipe }) {
  const handleDelete = (index) => {
    onDeleteRecipe(index);
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img 
                  src={recipe.photo} 
                  alt={recipe.name} 
                  style={{ 
                    maxWidth: "100%", 
                    height: "auto",
                    objectFit: "scale-down"
                  }} 
                />
              </td>
              <td className="content_td"><p>{recipe.ingredients}</p></td>
              <td className="content_td"><p>{recipe.preparation}</p></td>

              <td>
                <button name='delete' onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
