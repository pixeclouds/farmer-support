const Repository = require('./repository')
const { produceValidatorSchema } = require('./schema')
const { validateInput } = require("../../utils/validator.js")
const {  uploadProduceImage } = require("../../utils/cloudinary.js")



exports.getProduce = async (req, res) => {
    try {
        let page  = req.query.page || 1
        //get all produce
        let result = await Repository.getProduce(page)
        res.status(200).json({
            "meta-data": {
                "current page": page,
                "total-pages": result.totalPages
            },
            "data" : result.produce
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

        // upload image to cloudinary and return the img url
        let imageUrl = await uploadProduceImage(req, res)        
        let produce = await Repository.addProduce(newProduce, imageUrl, user)

        produce = {
            id: produce._id,
            cropType: produce.cropType,
            description: produce.description,
            price: produce.price,
            farmer: produce.farmer,
            farmName: produce.farmName,
            imageUrl: produce.imageUrl
        }

        res.status(200).json(produce)
        
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
