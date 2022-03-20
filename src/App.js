import { useState, useEffect } from 'react';
import { Button, Card, Box } from '@mui/material';
import './App.css';

function Weather({temperature, weather, city}) {
  
  return (
    <>
      
      <h3>{city}</h3>
      <p> {temperature}</p>
      <p> {weather}</p>
      
  
    </>
  )
}

function SevenDayForecast({ sevenDayTemp, sevenDayWeather }) {
  return (
    <>
      <p>{sevenDayTemp}</p>
      <p>{sevenDayWeather}</p>
    </>
  )
}


function App() {
  const [cityName, setCityName] = useState([]);
  const [localTemp, setlocalTemp] = useState([]);
  const [localWeather, setLocalWeather] = useState([]);
  const [dayList, setDayList] = useState([]);

  
  async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=imperial&cnt=7&appid=');
    const data = await response.json()

    console.log(data)
       setlocalTemp(data.list[0].temp.day) 
    setLocalWeather(data.list[0].weather[0].main)
    setCityName(data.city.name)
    setDayList(data.list)


    }
    
    
  
  console.log(localTemp)
  return (
    <>
      
      <Card sx={{ maxWidth: 275 }}>
        <Weather temperature={localTemp} weather={localWeather} city={cityName} />
        </Card>
        
      <Button variant="contained" onClick={getWeather}>
  Get Weather
</Button>
     
</>
  );
}

export default App;
