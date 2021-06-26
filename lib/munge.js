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

function mungeReviews(reviewsResponse)
{
  // console.log(reviewsResponse);

  const mungedReviewsResponse = reviewsResponse.map(review =>
  {
    return {
      name: review.name,
      image_url: review.image_url,
      price: review.price,
      rating: review.rating,
      url: review.url
    };
  });
  return mungedReviewsResponse;
}

module.exports = {
  mungeLocations,
  mungeWeatherResponse,
  mungeReviews

};