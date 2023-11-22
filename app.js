require('dotenv').config()
const express = require('express')
const app = express()

const { connectToDB }=  require('./src/config/database')
const userRouter = require('./src/modules/farmer/routes')

app.use(express.json())

app.use(userRouter)

app.get('/', (req, res) => {
    res.send('app running')
})

// database connection
connectToDB()

app.listen(3000, () => {
    console.log(`App is running on port 3000`)
})