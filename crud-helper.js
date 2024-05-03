// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Aspect = require('./models/aspect');
// const Habit = require('./models/habit')
// const Goal = require('./models/goal')


// Local variables will come in handy for holding retrieved documents
let user, aspect, habit, goal;
let users, aspects, habits, goals;