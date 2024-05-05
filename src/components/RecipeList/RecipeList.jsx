export default function RecipeList({ title, image, ingredients }) {
    return (
        <div>
            <div className="form-container">
                <h1>{title}</h1>
                <ul>
                        <form>
                            {ingredients.map(ingredient => (
                                <li>{ingredient.text}</li>
                            ))}
                            <img className="image + object-center" src={image} alt=""/>
                        </form>
                    <br />
                    <br />
                </ul>
            </div>
        </div>
    )
}