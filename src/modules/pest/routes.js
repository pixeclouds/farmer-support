const { pestAlert } = require("./controller")

const pestRouter = require("express").Router()

pestRouter.get('/pest/alert', pestAlert)

module.exports = pestRouter