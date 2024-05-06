import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecipeList({ title, image, ingredients, url, uri }) {
  const navigate = useNavigate()
  function myRecipesPage() {
    navigate('/recipes/my-recipes')
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <ul>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold">{title}</a>
        <br /><br />
        <div className="flex items-center justify-center">
          <div className="form-container">
            <form onSubmit={myRecipesPage(title)}>
              <div>
                <img className="image" src={image} alt="" />
              </div>
              <div>
                {ingredients.map(ingredient => (
                  <li key={uri}>{ingredient.text}</li>
                ))}
              </div>
              <button>Save Recipe</button>
            </form>
          </div>
        </div>
        <br />
        <br />
        <hr />
      </ul>
    </div>
  )
}