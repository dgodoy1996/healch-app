const express = require('express')
const router = express.Router()
const recipesCtrl = require('../../controllers/api/recipes')

router.get('/', recipesCtrl.index)

module.exports = router