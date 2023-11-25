require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()

const { connectToDB }=  require('./src/config/database')
const userRouter = require('./src/modules/farmer/routes')
const produceRouter = require('./src/modules/produce/routes')
const forecastRouter = require('./src/modules/forecast/routes')
const AssistantRouter = require('./src/modules/assistant/routes')




// enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
    res.json({"message": "farmer support API is up and running"})
})


app.use(express.json())
app.use(userRouter)
app.use(produceRouter)
app.use(forecastRouter)
app.use(AssistantRouter)


// database connection
connectToDB()

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})