import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWeatherDetails } from "../redux/Actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { getWeather, getWeatherSuccess } from "../redux/Selector";
import AdditionalInfoWeather from "./AdditionalInfoWeather";





const Weather = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const data = useSelector(getWeather);
  const success = useSelector(getWeatherSuccess);
  const { weather, sys, name, main } = data;

  useEffect(() => {
    dispatch(GetWeatherDetails());
  }, [GetWeatherDetails])


  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput) dispatch(GetWeatherDetails(searchInput));
    setSearchInput("");
  };
  const handleOnChange = e => {
    setSearchInput(e.target.value);
  };


  return (
    <>
      <div className="header">
        <span className="heading">Weather Finder</span>
      </div>
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Weather by City"
            value={searchInput}
            onChange={e => handleOnChange(e)}
          />
          <button>Find</button>
        </form>

        <div className="container-heading">
          <span className="location">
            {success ? name : null}
            <small>({success ? sys.country : null})</small>
          </span>
        </div>

        <div className="info">
          <div className="sub-heading">
            Weather Forecast: {success ? moment().format("MMM DD YYYY") : null}
          </div>
          <div className="forecast-value" >
            <div className="degrees">
                <span className="degrees-count">
                  {success ? main.temp : null}
                </span>
              C
            </div>
          </div>
          <div className="forecast-info">
            <div className="forecast-icon">
              {success ? (
                <img
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt=""
                />
              ) : null}
            </div>
            <div className="forecast-value">
              <span className="weather-condition">
                {success ? weather[0].main : null}
              </span>
            </div>
          </div>
          <AdditionalInfoWeather success={success} main={main}/>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}


export default Weather;
