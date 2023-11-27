const { getLatLong, getWeatherForecast } = require('../../utils/forecast')
const userRepository = require('../../modules/farmer/repository')


exports.weatherForecast = async (req, res) => {
    try {
        let { location } = await userRepository.getUser(req.email)
        console.log(location)
        let {latitude, longitude } = await getLatLong(location)
        console.log(latitude , longitude )
        let weather = await getWeatherForecast(latitude, longitude)

        res.status(200).json(weather)
        
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
        
    }
}