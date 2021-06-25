function mungeLocations(locationResponse) {
  const location = locationResponse[0];
    
  return {
    formatted_query: location.display_name,
    latitude: location.lat,
    longitude: location.lon
  };
}

function mungeWeatherResponse(weatherResponse) {
  const forecasts = weatherResponse.data;
  const mungedWeatherForecasts = forecasts.map(forecast =>
  {
    return {
      forecast: forecast.weather.description,
      time: new Date(forecast.ts * 1000)
        .toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
    };
  });
  return mungedWeatherForecasts;
}



module.exports = {
  mungeLocations,
  mungeWeatherResponse
};