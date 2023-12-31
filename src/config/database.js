const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL

// database connection function
exports.connectToDB = () => {
    mongoose.connect(DB_URL)
    .then(() => {
        console.log("Database connection established")
    }).catch(err => console.log(err))
}