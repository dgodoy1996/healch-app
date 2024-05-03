const mongoose = require('mongoose')

require('./aspect')

const habitSchema = new Schema({
    habitName: { type: String },
    aspect: { type: Schema.Types.ObjectId, ref: 'Aspect'}
})

module.exports = mongoose.model('Habit', habitSchema)