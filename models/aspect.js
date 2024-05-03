const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aspectSchema = new Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Aspect', aspectSchema)