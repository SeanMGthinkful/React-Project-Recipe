import React, { useState } from "react";

function RecipeCreate({ recipes, addRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...initialFormState });
    console.log(formData)
    addRecipes(formData)
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody></tbody>
        <tfoot>
          <tr className="footer_row">
            <td className="name_column">
              <input
                // NAME INPUT
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required={true}
              ></input>
            </td>
            <td className="cuisine_column">
              <input
                // Cuisine INPUT
                type="text"
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required={true}
              ></input>
            </td>
            <td className="photo_column">
              <input
                type="url"
                id="photo"
                name="photo"
                placeholder="URL for photo"
                value={formData.photo}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows={4}
                required={true}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Instructions to prepare"
                value={formData.preparation}
                onChange={handleChange}
                rows={4}
                required={true}
              />
            </td>
            <td className="button_td">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export default RecipeCreate;