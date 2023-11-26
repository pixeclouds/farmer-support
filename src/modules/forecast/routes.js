const forecastRouter = require('express').Router()
const { weatherForecast } = require('./controller')
const { userAuthorized } = require('../../middlewares/authorize.js')


forecastRouter.get('/weather/forecast', userAuthorized, weatherForecast)

module.exports = forecastRouter