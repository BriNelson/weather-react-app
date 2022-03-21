import { useState, useEffect } from 'react';
import { Button, Card, Box, CardMedia, TextField } from '@mui/material';
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

function SevenDayForecast({ sevenDayTemp, sevenDayWeather, sevenDayIcon }) {
  return (
    <>
      <Card sx={{ maxWidth: 70 }}>
      <CardMedia
        component="img"
        height="70"
        image={"http://openweathermap.org/img/wn/"+ sevenDayIcon +"@2x.png"}
        alt="Paella dish"
      />
      <p>{sevenDayTemp}</p>
        <p>{sevenDayWeather}</p>
        
        </Card>
    </>
  )
}


function App() {
  const [cityName, setCityName] = useState([]);
  const [localTemp, setlocalTemp] = useState([]);
  const [localWeather, setLocalWeather] = useState([]);
  const [dayList, setDayList] = useState([]);
  const [chosenCity, setChosenCity] = useState('');


  
  async function getWeather() {


    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=imperial&cnt=7&appid=08e194dbf106b4a880235ddea75704dd');
    const data = await response.json()

    console.log(data.list)
       setlocalTemp(data.list[0].temp.day) 
    setLocalWeather(data.list[0].weather[0].main)
    setCityName(data.city.name)
    setDayList(data.list)


    }
    
    
  
 
  return (
    <>
      <form>
      <input
        type="text"
          value={chosenCity}
          onChange={(e) => setChosenCity(e.target.value)}
      ></input>
      <button onClick={getWeather}>
  Get Weather
        </button>
      </form>
      {chosenCity}
      <Card sx={{ maxWidth: 275 }}>
        <Weather temperature={localTemp} weather={localWeather} city={cityName} />
        </Card>
        
      {dayList.map(dayTest => (<SevenDayForecast sevenDayTemp={dayTest.temp.day} sevenDayWeather={dayTest.weather[0].main} sevenDayIcon={dayTest.weather[0].icon }/>))}
     
</>
  );
}

export default App;
