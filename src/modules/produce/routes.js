const produceRouter = require('express').Router()
const { userAuthorized } = require('../../middlewares/authorize.js')
const { getProduce, 
        getMyProduce,
        addProduce,
        removeProduce,
        getInsights
    } = require('./controller')
const { uploads } = require("../../utils/multer");


produceRouter.get('/produce', userAuthorized, getProduce)
produceRouter.get('/produce/me', userAuthorized, getMyProduce)
produceRouter.post('/produce/me', userAuthorized, uploads.single('file'), addProduce)
produceRouter.delete('/produce/me', userAuthorized, removeProduce)
produceRouter.get('/produce/insights', userAuthorized, getInsights)

module.exports =  produceRouter 
