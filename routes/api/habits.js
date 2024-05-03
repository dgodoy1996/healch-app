const express = require('express')
const router = express.Router()
const habitsCtrl = require('../../controllers/api/habits')

router.get('/', habitsCtrl.index)
router.get('/:id', habitsCtrl.show)
router.get('/wellness/:id', habitsCtrl.getAspectHabits)
router.post('/wellness/:id', habitsCtrl.create)

module.exports = router