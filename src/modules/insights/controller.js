const { getMarketInsights } = require("../../utils/insights.js")
const ProduceRepository = require('../produce/repository.js')



exports.getInsights = async (req, res) => {
    try {
        let { crop } = req.query
        let produce = await ProduceRepository.getInsightData(crop)
        let insights = await getMarketInsights(produce)

        res.status(200).json(insights)
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}