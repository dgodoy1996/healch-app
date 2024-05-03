const express = require('express')
const router = express.Router()
const goalsCtrl = require('../../controllers/api/goals')

router.get('/', goalsCtrl.index)
router.get('/:id', goalsCtrl.show)
router.get('/wellness/:id', goalsCtrl.getAspectGoals)
router.post('/wellness/:id', goalsCtrl.create)

module.exports = router