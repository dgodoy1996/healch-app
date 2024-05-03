const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('./aspect')

const habitSchema = new Schema({
    habitName: { type: String },
    aspect: { type: Schema.Types.ObjectId, ref: 'Aspect'},
    user: { type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Habit', habitSchema)