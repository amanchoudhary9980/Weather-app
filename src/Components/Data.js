import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Search } from "@mui/icons-material";
import {TailSpin} from "react-loader-spinner"

const Data = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Forecast index={0} data={forecast}/>,
    },
    {
      path: "/tommorow",
      element: <Forecast index={1} data={forecast}/>,
    },
    {
      path: "/3",
      element: <Forecast index={2} data={forecast}/>,
    },
    {
      path: "/4",
      element: <Forecast index={3} data={forecast}/>,
    },
    {
      path: "/5",
      element: <Forecast index={4} data={forecast}/>,
    },
    {
      path: "/6",
      element: <Forecast index={5} data={forecast}/>,
    },
  ]);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    const showPosition = (position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherData(latitude, longitude);
    };

    getLocation();
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const apiKey = "47e12ffc739f91cc0f184d94f100dd86";
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      const [currentWeatherResponse, forecastResponse] = await Promise.all([
        axios.get(currentWeatherUrl),
        axios.get(forecastUrl),
      ]);

      setCurrentWeather(currentWeatherResponse.data);
      setForecast(forecastResponse.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
    console.log(forecast)
  };

  const handleCityChange = async (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      setLoading(true);
      try {
        const apiKey = "47e12ffc739f91cc0f184d94f100dd86";
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const [currentWeatherResponse, forecastResponse] = await Promise.all([
          axios.get(currentWeatherUrl),
          axios.get(forecastUrl),
        ]);

        setCurrentWeather(currentWeatherResponse.data);
        setForecast(forecastResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
      console.log(forecast)
    }
  };
  return (
    <>
    <div className="weather-main">
      <div className="search">
        <form onSubmit={handleCityChange}>
          <input
            type="text"
            placeholder="Search weather"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="button"><Search></Search></button>
        </form>
      </div>
      {loading ? (
        <div className="Loading-div"><TailSpin color="white"/></div>
      ) : (
        <>
          {currentWeather && <Weather data={currentWeather} />}
        </>
      )}
    </div>
      <RouterProvider router={router} />
    </>
  );
};

export default Data;
