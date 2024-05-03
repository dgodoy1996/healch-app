const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('./aspect')

const goalSchema = new Schema({
    name: { type: String },
    aspect: { type: Schema.Types.ObjectId, ref: 'Aspect'},
    user: { type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Goal', goalSchema)