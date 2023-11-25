const { predictPest } = require('./model')
const userRepository = require('../../modules/farmer/repository')

exports.pestAlert = async (req, res) => {
    try {
        let farmer = userRepository.getUser(req.user)
        let farmLocation = farmer.state
        const potentialPests = predictPest(farmLocation);

        if (potentialPests.length > 0) {
            alert = true
            pests = potentialPests
        } else {
            alert = false
            pests = "There is No likely pest attack for the next 1 month"
        }
        res.status(200).json({
            alert,
            pests
        })

    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}
