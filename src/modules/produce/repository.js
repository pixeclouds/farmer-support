const { Produce } = require('./schema')
const { User } = require('../farmer/schema')
const { v4 } = require("uuid")



exports.getProduce= async(page) => {
    let limit = 10
    let totalPages = await Produce.find()
                        .count()
    let produce =  await Produce.find()
                    .limit(10)
                    .skip((page - 1) * limit)
    //filter result    
    return {
        produce,
        totalPages
    }
}

exports.getMyProduce = async (user) => {
    return Produce.find({farmer: user._id})
}

exports.addProduce = async (produce, user) => {
    let _id = v4()
    let {farmName }= await User.findById(user)
    let newProduce = new Produce({_id,farmName, ...produce})
    await newProduce.save()

    return newProduce
}

exports.removeProduce = async (produceId) => {
    await Produce.deleteOne({_id: produceId})
}