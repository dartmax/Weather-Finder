import { createStore, applyMiddleware, combineReducers } from "redux";
import { WeatherReducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

let rootReducers = combineReducers({
  WeatherReducer: WeatherReducer,
})
const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default Store;
