const axios =require('axios')
const cors = require('cors')
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
// Connect to db after the dotenv above
require('./config/database');

const app = express();
app.use(cors())

app.use(logger('dev'));
// Process data in body of request if 
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json());

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'));

// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'));
app.use('/api/goals', require('./routes/api/goals'));
app.use('/api/habits', require('./routes/api/habits'));
app.use('/api/aspects', require('./routes/api/aspects'));

// "catch-all" route that will match all GET requests
// that don't match an API route defined above
const root = require('path').join(__dirname, 'src', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
app.get('/recipes/:query', async(req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`
  )
  console.log(response.data)
  res.json(response.data.hits)

})

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
