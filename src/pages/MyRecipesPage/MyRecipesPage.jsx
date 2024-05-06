import { useParams } from 'react-router-dom';

export default function MyRecipesPage() {
  const { recipeName } = useParams();
  
  return (
    <div>
      <h1>My Recipes Page</h1>
      <h2>Recipe Name: {recipeName}</h2>
    </div>
  );
}