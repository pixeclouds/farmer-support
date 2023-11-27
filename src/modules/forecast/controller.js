const { getLatLong, getWeatherForecast } = require('../../utils/forecast')
const userRepository = require('../../modules/farmer/repository')


// retrieve forecast data for the farmer's location (town)
exports.weatherForecast = async (req, res) => {
    try {
        let { location } = await userRepository.getUser(req.email)
        let {latitude, longitude } = await getLatLong(location)
        let weather = await getWeatherForecast(latitude, longitude)

        res.status(200).json(weather)
        
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
        
    }
}