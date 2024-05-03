const Goal = require('../../models/goal')

module.exports = {
    index,
    show,
    getAspectGoals,
    create
}

async function index(req, res) {
    const goals = await Goal.find({}).sort('name').populate('aspect').exec()
    res.json(goals)
}

async function show(req, res) {
    const goal = await Goal.findById(req.params.id)
    res.json(goal)

}

async function getAspectGoals(req, res) {
    console.log(req.params.id)
    console.log(req.user)
    const aspect = req.params.id
    const user = req.user._id
    const goal = await Goal.find({aspect, user})
    res.json(goal)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.aspect = req.params.id
    const goal = await Goal.create(req.body)
    res.json(goal)
}