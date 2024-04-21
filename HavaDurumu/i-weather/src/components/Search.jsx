
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Search.css';
import { Link } from 'react-router-dom';
import { useWeatherContext } from './Context';
import { useNavigate } from 'react-router-dom';
import  '../styles/FirstPage.css';


function Search() {
  const { setSelectedCity, setWeatherData } = useWeatherContext();
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
   const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const handleChange = async (e) => {
    const userInput = e.target.value;
    setQuery(userInput);
    try {
      if (userInput.trim() !== '') {
        const response = await axios.get(
          `https://pro.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=${API_KEY}`
        );
        setCities(response.data);
      } else {
        setCities([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`
      );        
      setWeatherData(response.data);
      setSelectedCity(city);
      navigate('/mainpage');
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search location"
          className='search-inp'
          value={query}
          onChange={handleChange}
        />
      </form>
      {cities.length === 0 && query.trim() !== '' && (
        <p className='invalid'>Invalid city name</p>
      )}
      <div className="city-list">
        {cities.map((city) => (
          <div key={city.id} className="search-inp" onClick={() => handleClick(city)}>
            <p>{city.name} - {city.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
