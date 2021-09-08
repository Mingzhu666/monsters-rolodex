import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const API_key = 'c8e76c9b4fa36112b0d8aff693cee1fc';
const city = 'Sydney';
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState([])
  // useEffect(async () => {
  //   const {data} = await Axios.get(api)
  //   const formatedWeatherData = formatWeatherData(data)
  //   setWeatherData(formatedWeatherData)
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(api);
      const formatedWeatherData = formatWeatherData(data);
      setWeatherData(formatedWeatherData);
    };

    fetchData();
  }, []);

  const formatWeatherData = (apiResponse) => {
    return apiResponse.list.map(item => {
      const time = item.dt
      const weather = item.weather[0].description
      return {
        time: new Date(time).toLocaleTimeString(),
        weather
      }
    })
  }

  

  return (
    <ul>
      {weatherData.map((item, index) => <li key={index}>{item.time} : {item.weather}</li>)}
    </ul>
  );
}

export default Weather;

