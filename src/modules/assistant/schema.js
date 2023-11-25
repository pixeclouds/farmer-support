const mongoose = require("mongoose")
const { v4 } = require("uuid")
const Joi = require("joi")

//database schema
const Schema = mongoose.Schema

const messageSchema = new Schema({
    role: {
      type: String,
      required: true,
    },
    content: {
        type: String,
        required: true,
      },
  })


const chatSchema = new Schema({
    _id: {
        type: String,
        default: v4()
    },
    farmerId: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    chats: [messageSchema]
}, 
{
    timestamps: true
})

const Chat = mongoose.model('chat', chatSchema)

module.exports = { Chat }