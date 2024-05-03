require('dotenv').config()
const db = require('./config/database')

const Aspect = require('./models/aspect')

const main = async () => {
    await Aspect.deleteMany({});
    const aspects = [
        {name: 'Creativity'},
        {name: 'Spirituality'},
        {name: 'Joy'},
        {name: 'Social Life'},
        {name: 'Relationship'},
        {name: 'Home Environment'},
        {name: 'Home Cooking'},
        {name: 'Physical Activity'},
        {name: 'Health'},
        {name: 'Education'},
        {name: 'Career'},
        {name: 'Finances'}
    ]

    await Aspect.insertMany(aspects)
}

const run = async () => {
    await main()
    db.close()
}

run()