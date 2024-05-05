const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: { type: String },
    image: { type: String },
    ingredient: { type: String }
})

module.exports = mongoose.model('Recipe', recipeSchema)