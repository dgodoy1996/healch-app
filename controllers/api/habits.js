const Habit = require('../../models/habit')

module.exports = {
    index,
    show,
    getAspectHabits,
    create
}

async function index(req, res) {
    const habits = await Habit.find({}).sort('name').populate('aspect').exec()
    res.json(habits)
}

async function show(req, res) {
    const habit = await Habit.findById(req.params.id)
    res.json(habit)

}

async function getAspectHabits(req, res) {
    console.log(req.params.id)
    console.log(req.user)
    const aspect = req.params.id
    const user = req.user._id
    const habit = await Habit.find({aspect, user})
    res.json(habit)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.aspect = req.params.id
    const habit = await Habit.create(req.body)
    res.json(habit)
}