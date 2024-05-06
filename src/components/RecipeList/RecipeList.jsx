import React from 'react';

export default function RecipeList({ title, image, ingredients, url, uri }) {
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
            <form>
              <div>
                <img className="image" src={image} alt="" />
              </div>
              <div>
                {ingredients.map(ingredient => (
                  <li key={uri}>{ingredient.text}</li>
                ))}
              </div>
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