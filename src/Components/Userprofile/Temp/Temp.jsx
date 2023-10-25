import React, { useState, useEffect } from "react";
import clear from "../../../assets/Temp/clear.svg";
import clouds from "../../../assets/Temp/clouds.svg";
import drizzle from "../../../assets/Temp/drizzle.svg";
import humidity from "../../../assets/Temp/humidity.svg";
import mist from "../../../assets/Temp/mist.svg";
import rain from "../../../assets/Temp/rain.svg";
import search from "../../../assets/Temp/search.svg";
import snow from "../../../assets/Temp/snow.svg";
import wind from "../../../assets/Temp/wind.svg";

const WeatherApp = () => {
  const apiKey = "375c2c4964689fe70b68240c5e91ef5e";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  const [city, setCity] = useState("Bangkok");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    checkWeather(city);
  }, []);

  const checkWeather = async (city) => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if (response.status === 404) {
        console.error("Invalid City Name");
      } else {
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (error) {
      console.error("Error fetching weather", error);
    }
  };

  const weatherIconUrl = (weather) => {
    switch (weather) {
      case "Clouds":
        return clouds;
      case "Clear":
        return clear;
      case "Rain":
        return rain;
      case "Drizzle":
        return drizzle;
      case "Mist":
        return mist;
      default:
        return "";
    }
  };

  return (
    <div className="flex items-center  lg:mt-0">
  <div className="bg-white p-4  shadow-md  rounded-xl shadow-[#999999]">
    <div className="flex items-center">
      <input
        type="text"
        placeholder="enter city name"
        spellCheck="false"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded mr-2 w-4/5"
      />
      <button
        onClick={() => checkWeather(city)}
        className="bg-blue-500 p-2 rounded"
      >
        <img src={search} alt="Search" className="w-4" />
      </button>
    </div>
    {weatherData && (
      <div className="">
        <div className="flex items-center">
          <img
            src={weatherIconUrl(weatherData.weather[0].main)}
            alt="Weather"
            className="weather-icon w-40"
          />
          <div>
            <h1 className="text-sm">{Math.round(weatherData.main.temp)}°c</h1>
            <h2 className="text-sm">{weatherData.name}</h2>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="text-center flex items-center">
            <div>
              <p className="text-sm">{weatherData.main.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="text-center flex-col items-center">
            <div>
              <p className="text-sm">{weatherData.wind.speed} km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
        
      </div>
    )}
  </div>
</div>

  );
};

export default WeatherApp;
