// src/Weather.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // Store user input for the city

  useEffect(() => {
    if (city === '') return; // Don't make an API call if the city is empty

    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'c5838e8c696bd219b472dbe647a8a62d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;