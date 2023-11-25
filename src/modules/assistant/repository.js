const { Chat }  = require('./schema.js')
const { v4 } = require('uuid')


exports.createChat = async (farmerId, title, messages) => {
    _id = v4()
    let chat = new Chat({_id, farmerId, title, chats: [...messages]})
    await chat.save()
    
    return chat._id
}


exports.updateChat = async (chatId,  messages) => {
    await Chat.updateOne({ _id: chatId }, { $push: { chats: { $each: messages } } })
  
}

exports.getChat = async (chatId) => {
    return await Chat.findOne({_id: chatId})
                        .select('_id title chats.role chats.content')

}

exports.getMyChats = async (farmerId) => {
    return await Chat.find({farmerId})
                        .select('_id title chats.role chats.content')

}