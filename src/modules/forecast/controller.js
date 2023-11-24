
const UserRepository = require('../../modules/farmer/repository')
const {getCityKey, getCurrentCondition } = require('../../utils/request')

exports.currentWeather = async (req, res) => {

    try {
        let { location } = await UserRepository.getUser(req.email)

        // get city key
        let cityKey = await getCityKey(location)

        // retrieve current weather data
        let weatherData = await getCurrentCondition(cityKey)


        data = {
            WeatherText: weatherData[0].WeatherText,
            WeatherIcon: weatherData[0].weatherIcon,
            HasPrecipitation: weatherData[0].HasPrecipitation,
            PrecipitationType: weatherData[0].PrecipitationType,
            Temperature: weatherData[0].Temperature

        }
        console.log(data)

        res.status(200).json(data)
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
        
    }

}

// exports.forecast = async (req, res) = {}