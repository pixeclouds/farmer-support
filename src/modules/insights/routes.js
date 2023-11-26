const InsightsRouter = require('express').Router()
const { userAuthorized } = require('../../middlewares/authorize.js')
const { getInsights } = require('./controller') 

InsightsRouter.get('/produce/insights', userAuthorized, getInsights)

module.exports = InsightsRouter