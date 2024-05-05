import React, { useState, useEffect } from 'react';
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
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        <aside>
          {recipes.map(recipe => (
            <RecipeList 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
          ))}
        </aside>
      </div>
    </div>
  );

  // const [recipes, setRecipes] = useState([])
  // const [search, setSearch] = useState('')
  // const [query, setQuery] = useState('')

  // const APP_ID = 'dcff87f8';
  // const APP_KEY = '3c5eb14159cfd3770203b4ef5a39e0f7';

  // useEffect(function() {
  //   getRecipes()
  //   async function getRecipes() {
  //     const response = await axios.get(
  //       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  //     )
  //     setRecipes(response.data)
  //   }
  // }, [query])

  // function handleChange(e) {
  //   e.preventDefault()
  //   setSearch(e.target.value)
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   setQuery(search)
  //   setSearch('')
  // }

  // return (
  //   <div className='RecipePage'>
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" value={search} onChange={handleChange}/>
  //       <button type="submit">Search</button>
  //     </form>
  //     <div>
  //       {recipes.map(recipe => (
  //         <RecipeList 
  //           key={recipe.recipe.label}
  //           title={recipe.recipe.label}
  //           image={recipe.recipe.image}
  //           ingredients={recipe.recipe.ingredients}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // )
};