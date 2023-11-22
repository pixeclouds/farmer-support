const userRouter = require('express').Router()
const { signup, login, profile } = require("./controller.js")
const { userAuthorized } = require('../../middlewares/authorize.js')

userRouter.post('/user/signin', login)
userRouter.post('/user/signup', signup)
userRouter.post('/user/profile', userAuthorized, profile)

module.exports = userRouter