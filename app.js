require('dotenv').config()
const express = require('express')
const app = express()

const { connectToDB }=  require('./src/config/database')
const userRouter = require('./src/modules/farmer/routes')
const produceRouter = require('./src/modules/produce/routes')


app.get('/', (req, res) => {
    res.json({"message": "farmer support API is up and running"})
})


app.use(express.json())


app.use(userRouter)
app.use(produceRouter)

// database connection
connectToDB()

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})