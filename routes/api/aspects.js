const express = require('express')
const router = express.Router()
const aspectsCtrl = require('../../controllers/api/aspects')

router.get('/', aspectsCtrl.index)

module.exports = router