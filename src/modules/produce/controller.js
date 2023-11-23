const Repository = require('./repository')
const { produceValidatorSchema } = require('./schema')
const { validateInput } = require("../../utils/validator.js")

exports.getProduce = async (req, res) => {
    try {
        let page  = req.query.page || 1
        //get all produce
        let result = await Repository.getProduce(page)
        res.status(200).json({
            "meta": {
                "page": page,
                "total": result.totalPages
            },
            "produce" : result.produce
        })
        
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}

exports.getMyProduce = async (req, res) => {
    try {
        let user = req.user

        let myProduce = await Repository.getMyProduce(user)
        
        res.status(200).json({
            "myProduces": myProduce
        })
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}


exports.addProduce = async (req, res) => {
    try {
        let user = req.user
        let newProduce =  req.body

        //validate input
        let isValid = await validateInput(produceValidatorSchema, newProduce)
        if (!isValid){
            throw Error
        }
        
        
        let produce = await Repository.addProduce(newProduce, user)

        produce = {
            id: produce._id,
            cropType: produce.cropType,
            description: produce.description,
            price: produce.price,
            farmName: produce.farmName
        }

        res.status(200).json({
            "produce": produce
        })
        
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}


exports.removeProduce = async (req, res) => {
    try {
        let produceId = req.query.id

        await Repository.removeProduce(produceId)
        res.status(200).json({
            "message": "produce deleted"
        })
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}