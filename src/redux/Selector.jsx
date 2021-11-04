export const getWeather = (state) => {
  return state.WeatherReducer.data;
}

export const getWeatherSuccess = (state) => {
  return state.WeatherReducer.success;
}