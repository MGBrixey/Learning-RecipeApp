import React, { useState } from "react";

function RecipeCreate({ onCreateRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const RecipeForm = () => {
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onCreateRecipe(formData);
      console.log(formData);
      setFormData(initialFormState);
    };

    return (
      <form name="create" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                />
              </td>
              <td>
                <input
                    name="cuisine"
                    value={formData.cuisine}
                    onChange={handleChange}
                    required
                    placeholder="Cuisine"
                  />
              </td>
              <td>
                  <input
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    placeholder="Photo"
                  />
              </td>
              <td>
                <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                    placeholder="Ingredients"
                  />
              </td>
              <td>
                  <textarea
                    name="preparation"
                    value={formData.preparation}
                    onChange={handleChange}
                    required
                    placeholder="Preparation"
                  />                
              </td>
              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  };

  return <RecipeForm />;
}

export default RecipeCreate;
