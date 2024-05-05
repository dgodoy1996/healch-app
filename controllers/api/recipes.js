const Recipe = require('../../models/recipe')

module.exports = {
    index
}

async function index(req, res) {
    const recipes = await Recipe.get(
        `/recipes/${query}`
    )
    res.json(recipes)
}