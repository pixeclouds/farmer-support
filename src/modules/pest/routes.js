const { pestAlert } = require("./controller")
const { userAuthorized } = require('../../middlewares/authorize.js')
const pestRouter = require("express").Router()



pestRouter.get('/pest/alert', userAuthorized, pestAlert)

module.exports = pestRouter