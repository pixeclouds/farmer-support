const { predictPest, getPestControl } = require('./model')
const userRepository = require('../../modules/farmer/repository')
const { pestControlData } = require('../../data/pest-control')

exports.pestAlert = async (req, res) => {
    try {
        let farmer = await userRepository.getUser(req.email)
        let farmLocation = farmer.state
        let potentialPests = await predictPest(farmLocation)
         
        if (potentialPests.length > 0) {
            let alert = true
            let pestControlData = await getPestControl(potentialPests)

            res.status(200).json({
                alert: true,
                pests: potentialPests,
                pestControlData: pestControlData
            })
        } else {
            res.status(200).json({
                alert: false,
                message: "There is No likely pest attack for the next 1 month"
            })
        }


    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}
