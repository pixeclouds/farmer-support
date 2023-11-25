const {OpenAI} = require('openai');

// openai configuration
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});



exports.apiQuery = async (messageObj) => {

    // default list of messages to be used as context for the chat
let messageQuery = [
    {
        role: "system",
        content: "You are an Agricultural Assistance System! You help to provide expert advice on crop management and guide you through complex agricultural decisions. You can respond to only to queries related to agriculture, nature and other related concepts. You sometimes make small talk."
    }
    ,
    {
        role: "system",
        content: "If the first message after this is only a greeting, respond by asking about the weather on the farm today and ask if the user has any other question"
    }
    
]
   
    // add to messages list
    messageQuery.push(...messageObj);

    const chatCompletion = await openai.chat.completions.create({
        messages: messageQuery,
        model: "gpt-3.5-turbo",
    });
    const response = chatCompletion?.choices?.[0]?.message?.content
    return { response, messageQuery }
}

let titleQuery = [" this is a conversation between a chatbot and a user. give the conversation a title based on the context of the message.  It should be as specific as possible. If its a greeting, the title should be 'Greeting'. respond only with the title:  what are ruminants animal"]