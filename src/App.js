import { useState } from "react";
import "./App.css";
import { api_keyd } from "./api.js";
import Currentweather from "./components/currentWeather/Currentweather.js";
import Search from "./components/search/Search.js";
import Forecast from "./components/forecast/Forecast.js";

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  
  const onSearchChange = async (searchData) => {
    console.log(searchData.label.split(" ")[0]);
    const longitude = searchData.value.split(" ")[0];
    const latitude = searchData.value.split(" ")[1];
    console.log(latitude);
    const api_key = api_keyd;
    const currentWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    );
    const curr_weather_cast = await currentWeatherData.json();
    const fore_cast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    );
    const json_forcast = await fore_cast.json();
    console.log(json_forcast);
    setcurrentWeather({city:searchData.label,...curr_weather_cast});
    setforecast({city:searchData.label,...json_forcast});
  };

  return (
    <div className="container">
      <Search onSearchChange={onSearchChange} />
      {currentWeather && <Currentweather  data={currentWeather} />}
      {/* <Currentweather data={currentWeather} /> */}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
