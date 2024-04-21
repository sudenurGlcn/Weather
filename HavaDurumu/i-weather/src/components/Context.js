// Context.js
import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ selectedCity, setSelectedCity, weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
