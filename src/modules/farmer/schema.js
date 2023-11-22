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
    produceListing: [{
        type: Schema.Types.String,
        ref: 'produce-listing'
    }],
}, 
{
    timestamps: true
})

const User = mongoose.model('farmer', userShema)


// joi validator schema
const userValidatorSchema = Joi.object({
    farmerName : Joi.string(),
    email: Joi.string()
               .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
               .required(),
    password: Joi.string()
                .alphanum()
                .min(8)
                .required()
})

const profileValidatorSchema = Joi.object({
    farmName : Joi.string(),
    location: Joi.string()
})


module.exports = { User, userValidatorSchema, profileValidatorSchema }