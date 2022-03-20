import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
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


function App() {
  const [cityName, setCityName] = useState([]);
  const [localTemp, setlocalTemp] = useState([]);
  const [localWeather, setLocalWeather] = useState([]);

  
  async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=imperial&cnt=7&appid=08e194dbf106b4a880235ddea75704dd');
    const data = await response.json()

    console.log(data)
       setlocalTemp(data.list[0].temp.day) 
    setLocalWeather(data.list[0].weather[0].main)
    setCityName(data.city.name)


    }
    
    
  
  console.log(localTemp)
  return (
    <div className="App">
      
      
      <Weather temperature={localTemp} weather={localWeather} city={cityName}/>
      <Button variant="contained" onClick={getWeather}>
  Get Weather
</Button>
     
    </div>
  );
}

export default App;
