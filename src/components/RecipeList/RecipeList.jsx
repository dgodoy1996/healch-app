import { useNavigate } from "react-router-dom";

export default function RecipeList({ title, image, ingredients, url, uri, onSaveClick }) {
    const navigate = useNavigate();
    const myRecipesPage = () => {
        navigate(`/recipes/my-recipes`);
    };
    
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
                                <img className="image" src={image} alt=""/>
                            </div>
                            <div>
                                {ingredients.map(ingredient => (
                                    <li key={uri}>{ingredient.text}</li>
                                ))}
                            </div>
                            <button onClick={() => myRecipesPage()}>Save Recipe</button>
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