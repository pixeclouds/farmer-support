const AssistantRouter = require('express').Router()
const { assistant, chatHistory} = require('./controller.js')
const { userAuthorized } = require('../../middlewares/authorize.js')


AssistantRouter.post('/assistant', userAuthorized, assistant)
AssistantRouter.get('/assistant/history', userAuthorized, chatHistory)


module.exports = AssistantRouter