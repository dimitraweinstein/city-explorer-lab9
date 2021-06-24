function mungeLocations(locationResponse) {
  const location = locationResponse[0];
    
  return {
    formatted_query: location.display_name,
    latitude: location.lat,
    longitude: location.lon
  };
}

module.exports = {

  mungeLocations
    
};