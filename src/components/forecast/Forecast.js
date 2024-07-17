import "./forecast.css";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Shimmer from "./Shimmer";

const Forecast = ({ data }) => {
  console.log('Forecast data:', data);
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekdayNumber = new Date().getDay();
  const forecastDays = weekdays
    .slice(weekdayNumber, weekdays.length)
    .concat(weekdays.slice(0, weekdayNumber));
  console.log('Forecast days:', forecastDays);

  return (
    <div>
    
      <label className="title">Upcoming Days</label>
      <Accordion allowZeroExpanded>
        {data ? data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="small-icon"
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="desc">{item.weather[0].description}</label>
                  <label className="feels-like">
                    Feels like: {item.main.feels_like}°C
                  </label>
                  <label className="temp_max">
                    Max: {item.main.temp_max}°C
                  </label>
                  <label className="temp_min">
                    Min: {item.main.temp_min}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        )) : (
          <Shimmer />
        )}
      </Accordion>
    </div>
  );
};

export default Forecast;
