import { useState } from 'react';
import {Card, CardMedia, Button} from '@mui/material';
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
  const [chosenUnit, setChosenUnit] = useState('imperial');
  


  
  async function getWeather() {


    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${chosenCity}&units=${chosenUnit}&cnt=7&appid=08e194dbf106b4a880235ddea75704dd`);
    const data = await response.json()

    console.log(data.list)
       setlocalTemp(data.list[0].temp.day) 
    setLocalWeather(data.list[0].weather[0].main)
    setCityName(data.city.name)
    setDayList(data.list)


    }
    
    
  
 
  return (
    <div className="container">
      <div className="inputArea">
      <form>
          <input
            placeholder="City Name"
        type="text"
          value={chosenCity}
          onChange={(e) => setChosenCity(e.target.value)}
          ></input>
          <select onChange={(e) => setChosenUnit(e.target.value)} name="units" id="units">
  <option value="metric">Metric</option>
  <option value="imperial" selected>Imperial</option>
</select>
      
      </form>
      <Button variant="contained" onClick={getWeather}>
  Get Weather
        </Button>
        </div>
      <div className="mainCard">
      <Card sx={{ width: 275 }}>
        <Weather temperature={localTemp} weather={localWeather} city={cityName} />
        </Card>
        </div>
      <div className="sevenDat">
    
      {dayList.map(dayTest => (<SevenDayForecast className="daySpacing" sevenDayTemp={dayTest.temp.day} sevenDayWeather={dayTest.weather[0].main} sevenDayIcon={dayTest.weather[0].icon }/>))}
      </div>
      </div>
  );
}

export default App;
