export default function RecipeList({ title, image, ingredients, url, uri }) {
    return (
        <div>
            <br />
                <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                <br />
                <br />
                <ul>
                        <form>
                            <img className="image" src={image} alt=""/>
                            <div>
                                {ingredients.map(ingredient => (
                                    <li key={uri}>{ingredient.text}</li>
                                    
                                ))}
                            </div>
                        </form>
                    <br />
                    <br />
                        <hr />
                </ul>
        </div>
    )
}