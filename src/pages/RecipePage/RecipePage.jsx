
import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from '../../components/RecipeList/RecipeList';

export default function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const API_ID = 'dcff87f8';
  const APP_KEY = '3c5eb14159cfd3770203b4ef5a39e0f7';

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div>
      <br />
      <div className='form-container + shrink w-170 h-50 flex items-center max-w-md mx-auto shadow rounded border-0 p-3 flex '>
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <input className="input + shrink w-100 h-50" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search for recipes...'/>
          <button className="search-button + bg-#4a493b w-20" type="submit">Search</button>
        </form>
      </div>
      <br />
      <hr />
      <div>
        <aside>
          {recipes.map(recipe => (
            <RecipeList 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            uri={recipe.recipe.uri}
            />
          ))}
        </aside>
      </div>
    </div>
  )
}

