import { WEATHER } from "./Constants";
const InitialState = {
  loading: false,
  error: false,
  success: false,
  data: {}
};

export const WeatherReducer = (state = InitialState, action) => {
  const { type } = action;
  switch (type) {
    case WEATHER.GET_WEATHER_LOADING:
      return {
        ...state,
        loading: true
      };
    case WEATHER.GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      };
    case WEATHER.GET_WEATHER_REJECT:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};


