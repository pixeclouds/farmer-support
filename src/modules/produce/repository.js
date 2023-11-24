const { Produce } = require('./schema')
const { User } = require('../farmer/schema')
const { v4 } = require("uuid")



exports.getProduce= async(page) => {
    let limit = 10
    let totalPages = Math.floor(await Produce.find()
                        .count() / limit)
    let produce =  await Produce.find()
                    .limit(10)
                    .skip((page - 1) * limit)
                    .select("_id cropType description price farmer farmName")
    //filter result    
    return {
        produce,
        totalPages
    }
}

exports.getMyProduce = async (user) => {
    return Produce.find({farmer: user})
                    .select("_id cropType description price farmer farmName")
                    
}

exports.addProduce = async (produce, farmer) => {
    let _id = v4()
    let {farmName }= await User.findById(farmer)
    let newProduce = new Produce({_id, farmer, farmName, ...produce})
    await newProduce.save()

    return newProduce
       
}

exports.removeProduce = async (produceId) => {
    await Produce.deleteOne({_id: produceId})
}