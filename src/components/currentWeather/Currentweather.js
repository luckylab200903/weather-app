import "./currentweather.css";
import React from "react";

const Currentweather = ({ data }) => {
  console.log(data);
  
  return (
    <div className="weather">
    
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather-img"
          className="weather-icons"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{data.main.temp}°C</p>
        <div className="details">
          <div className="parameter-row">Details</div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span>{data.main.feels_like}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span>{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span>{data.main.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentweather;
