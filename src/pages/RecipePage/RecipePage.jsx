import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import RecipeList from '../../components/RecipeList/RecipeList';

export default function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

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

  const handleSaveClick = (recipe) => {
    setRecipes([recipe]); // Save only the selected recipe
    navigate('/recipes/my-recipes/');
  };

  return (
    <div>
      <br />
      <div className="flex items-center justify-center">
        <div className='form-container bg-stone-300'>
          <form onSubmit={handleSubmit} className='flex items-center justify-center'>
            <div>
              <h1>Find your favorite and healthy recipes here!</h1>
            </div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search for recipes...' />
            <button className="search-button + bg-#4a493b w-20" type="submit">Search</button>
          </form>
        </div>
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
              onSaveClick={() => handleSaveClick(recipe.recipe)}
            />
          ))}
        </aside>
      </div>
    </div>
  )
}
