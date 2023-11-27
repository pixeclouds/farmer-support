const axios = require('axios')

exports.getLatLong = async (locationName) => {
  try {
    // Make a request to the geocoding API
    const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1&language=en&format=json`);
    
    // Extract latitude and longitude from the response
    const { latitude, longitude } = response.data.results[0]
    
    // Return the result
    return { latitude, longitude }

  } catch (error) {
    console.error('Error fetching data:', error.message)
    throw error
  }
}




exports.getWeatherForecast = async (latitude, longitude, location )  => {
  try {
    // Make a request to the weather forecast API
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(latitude)}&longitude=${parseFloat(longitude)}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
    
    // const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')

    let weatherData = response.data


  
  // Extracting data for the next day 
  const nextDayData = {
    time: weatherData.hourly.time.slice(24, 48), // Extract timestamps for the next day
    temperature_2m: weatherData.hourly.temperature_2m.slice(24, 48),
    relative_humidity_2m: weatherData.hourly.relative_humidity_2m.slice(24, 48),
    wind_speed_10m: weatherData.hourly.wind_speed_10m.slice(24, 48),
  };
  
  // Extracting data for every four hours on the next day
  const forecastData = {
    time: nextDayData.time.filter((_, index) => index % 4 === 0).slice(0, 6), 
    temperature_2m: nextDayData.temperature_2m.filter((_, index) => index % 4 === 0).slice(0, 6),
    relative_humidity_2m: nextDayData.relative_humidity_2m.filter((_, index) => index % 4 === 0).slice(0, 6),
    wind_speed_10m: nextDayData.wind_speed_10m.filter((_, index) => index % 4 === 0).slice(0, 6),
  };
  
  let currentWeather = weatherData.current

  // get complementary weather data from another api (open weather api)
  let otherWeatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},ng&APPID=${process.env.OPEN_WEATHER_API}`)

  return {
    currentWeather: currentWeather,
    forecastWeather: forecastData,
    otherWeatherData: otherWeatherData.data
  }


  } catch (error) {
    console.error('Error fetching weather forecast:', error.message);
  }
}


