const weatherAPIKey = process.env.WEATHER_API_KEY 


// Helper function to make a generic HTTP request to the weather API
let weatherRequest = async (endpoint, method = 'GET', params = {}) => {

  const baseUrl = 'http://dataservice.accuweather.com';

  // Construct the full URL with the API key and query parameters
  const url = `${baseUrl}${endpoint}?apikey=${weatherAPIKey}`;

  // Configure the request options
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method === 'GET') {
    const queryParams = new URLSearchParams(params);
    endpoint = `${endpoint}?${queryParams}`;
  } else {
    options.body = JSON.stringify(params);
  }

  try {
    const response = await fetch(url, options);
    // console.log(response.data)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the JSON response
    return await response.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

exports.getCurrentCondition = async (cityKey) =>  {
    const currentConditionsEndpoint = '/currentconditions/v1/';
  
    try {
      const data = await weatherRequest(currentConditionsEndpoint + cityKey, 'GET');
      
      return data
    } catch (error) {
      // Handle errors here
      console.error('Error:', error.message);
    }
  }

exports.getCityKey = async (cityName) => {
    const citySearchEndpoint = '/locations/v1/cities/NG/search';
  
    try {
      const data = await weatherRequest(citySearchEndpoint, 'GET', { q: cityName });
      const cityKey = data
    //   console.log(data)
  
      if (cityKey) {
        return cityKey;
      } else {
        return "254085" // default: city key for Abuja
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
