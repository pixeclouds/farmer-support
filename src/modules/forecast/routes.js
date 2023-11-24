const forecastRouter = require('express').Router()
const { currentWeather } = require('./controller')
const { userAuthorized } = require('../../middlewares/authorize.js')


forecastRouter.get('/forecast/current', userAuthorized, currentWeather)

module.exports = forecastRouter