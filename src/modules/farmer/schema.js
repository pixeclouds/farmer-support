const mongoose = require("mongoose")
const { v4 } = require("uuid")
const Joi = require("joi")

//database schema
const Schema = mongoose.Schema
const userShema = new Schema({
    _id: {
        type: String,
        default: v4()
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }, 
    farmerName: {
        type: String,
    },
    farmName: {
        type: String
    },
    location: {
        type: String
    },
}, 
{
    timestamps: true
})

const User = mongoose.model('farmer', userShema)


// joi validator schema
const userValidatorSchema = Joi.object({
    email: Joi.string()
               .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
               .required(),
    password: Joi.string()
                .alphanum()
                .min(8)
                .required()
})

const profileValidatorSchema = Joi.object({
    fullName : Joi.string()
                    .required(),
    farmName : Joi.string()
                    .required(),
    location: Joi.string()
                    .required()
})


module.exports = { User, userValidatorSchema, profileValidatorSchema }