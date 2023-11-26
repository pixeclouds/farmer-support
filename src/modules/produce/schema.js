const mongoose = require("mongoose")
const { v4 } = require("uuid")
const Joi = require("joi")

//database schema
const Schema = mongoose.Schema
const produceSchema = new Schema({
    _id: {
        type: String,
        default: v4()
    },
    cropType: {
        type: String,
        require: true
    }, 
    description: {
        type: String,
        require: true

    },
    price: {
        type: String,
        require: true
    },
    farmer: {
        type: String
    },
    farmName: {
        type: String
    },
    imageUrl: {
        type: String
    }

}, 
{
    timestamps: true
})

const Produce = mongoose.model('produce', produceSchema)

const produceValidatorSchema = Joi.object({
    cropType : Joi.string()
                    .required(),
    description : Joi.string()
                    .required(),
    price: Joi.string()
                .required()
})

module.exports = { Produce, produceValidatorSchema}