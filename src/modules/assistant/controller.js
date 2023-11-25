 const { apiQuery } = require('./model')
 const Repository = require('./repository')




exports.assistant = async (req, res) => {
    try {
        let farmerId = req.user
        let { chatId, message } = req.body;
        let { response, messageQuery} = await apiQuery(message)
        let responseObj = { "role": "assistant", "content": response }

        let responseData = []
        responseData.push(...messageQuery, responseObj)

        // remove the default system message from the message array
        responseData.splice(0, 2)

        // extract new chat to be saved to the db
        let newChat = responseData.slice(-2)

        // check if conversationn is a new chat
        if (responseData.length <= 2) {
            chatId = await Repository.createChat(farmerId, "new title", newChat)
            chat = await Repository.getChat(chatId)

        } else {
            console.log(chatId)
            await Repository.updateChat(chatId, newChat)
            chat = await Repository.getChat(chatId)
        }

        return res.status(200).json({ conversation :chat })
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}

exports.chatHistory = async (req, res) => {
    try {
        let farmerId = req.user
        let history = await Repository.getMyChats(farmerId)

        res.status(200).json({ conversationHistory : history })
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
} 


