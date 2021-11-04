import React from "react";
import * as PropTypes from "prop-types";

const AdditionalInfoWeather = (props) => {
  return <div className="additional-info">
    <ul className="list">
      <li>
        <b style={{color: "red"}}>Feels Like:</b> {props.success ? props.main.feels_like : null}
      </li>
      <li>
        <b style={{color: "red"}}>Min Temp:</b> {props.success ? props.main.temp_min : null}
      </li>
      <li>
        <b style={{color: "red"}}>Max Temp:</b> {props.success ? props.main.temp_max : null}
      </li>
      <li>
        <b style={{color: "red"}}>Pressure:</b> {props.success ? props.main.pressure : null}
      </li>
      <li>
        <b style={{color: "red"}}>Humidity:</b> {props.success ? props.main.humidity : null}
      </li>
    </ul>
  </div>;
}

AdditionalInfoWeather.propTypes = {
  success: PropTypes.any,
  main: PropTypes.any
};

export default AdditionalInfoWeather;