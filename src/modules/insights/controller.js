const { getMarketInsights } = require("../../utils/insights.js")
const ProduceRepository = require('../produce/repository.js')


// get market insights (avg price and quantity listed on the market) for the last seven days 
// for a specific crop
exports.getInsights = async (req, res) => {
    try {
        let { crop } = req.query
        // get the specified produce data
        let produce = await ProduceRepository.getInsightData(crop.toLowerCase())

        // evaluate and get market insights for the produce
        let insights = await getMarketInsights(produce)

        res.status(200).json(insights)
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}