require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const { connectToDB }=  require('./src/config/database')
const userRouter = require('./src/modules/farmer/routes')
const produceRouter = require('./src/modules/produce/routes')
const forecastRouter = require('./src/modules/forecast/routes')
const AssistantRouter = require('./src/modules/assistant/routes');
const pestRouter = require('./src/modules/pest/routes')
const InsightsRouter = require('./src/modules/insights/routes');


// enable CORS for all routes
app.use(cors())
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.json({"message": "farmer support API is up and running"})
})


app.use(express.json())


app.use(userRouter)
app.use(produceRouter)
app.use(forecastRouter)
app.use(AssistantRouter)
app.use(pestRouter)
app.use(InsightsRouter)




// database connection
connectToDB()

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})