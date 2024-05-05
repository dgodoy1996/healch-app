export default function RecipeList({ title, image, ingredients, url, uri }) {
    return (
        <div>
            <br />
                <br />
                <br />
                <ul>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold">{title}</a>
                <br /><br />
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