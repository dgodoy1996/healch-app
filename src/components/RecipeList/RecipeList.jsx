export default function RecipeList({ title, image, ingredients }) {
    return (
        <div>
            <div className="form-container">
                <h1>{title}</h1>
                <ul>
                        <form>
                            <img className="image + object-center" src={image} alt=""/>
                            <div>
                                {ingredients.map(ingredient => (
                                    <li>{ingredient.text}</li>
                                ))}
                            </div>
                        </form>
                    <br />
                    <br />
                </ul>
            </div>
        </div>
    )
}