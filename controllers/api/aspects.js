const Aspect = require('../../models/aspect')

module.exports = {
    index
}

async function index(req, res) {
    const aspects = await Aspect.find({})
    res.json(aspects)
}