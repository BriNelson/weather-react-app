import { useState } from 'react';
import { Card, CardMedia, Button } from '@mui/material';
import SevenDayForecast from './components/SevenDayForecast';
import TodayWeather from './components/TodayWeather'
import './App.css';


function App() {
  const [cityName, setCityName] = useState([]);
  const [localTemp, setlocalTemp] = useState([]);
  const [localWeather, setLocalWeather] = useState([]);
  const [dayList, setDayList] = useState([]);
  const [chosenCity, setChosenCity] = useState('');
  const [chosenUnit, setChosenUnit] = useState('imperial');
  const [date, setDate] = useState('');
  
const [dayIcon, setDayIcon] = useState('03d');

  
  async function getWeather() {


    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${chosenCity}&units=${chosenUnit}&cnt=7&appid=08e194dbf106b4a880235ddea75704dd`);
    const data = await response.json()

    console.log(data.list)
       setlocalTemp(data.list[0].temp.day) 
    setLocalWeather(data.list[0].weather[0].main)
    setCityName(data.city.name)
    setDayList(data.list)
    setDayIcon(data.list[0].weather[0].icon)
    

    let dateObj = new Date(data.list[0].dt * 1000)
    
    setDate(dateObj.toString().split(/\s+/))
    console.log(date[1])
    
    // var stringArray = dateObj.split(/\s+/);
    // console.log(stringArray)

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
      <Card sx={{ width: 200, p:1, display: 'flex' }}>
         <div> <TodayWeather temperature={localTemp} weather={localWeather} city={cityName} /></div>

         <div><CardMedia
        component="img"
        height="150"
            image={"http://openweathermap.org/img/wn/" + dayIcon +"@2x.png"}
        alt="weather icon"
      /></div> 
        </Card>
        </div>
      <div className="sevenDat">
    
      {dayList.map(dayTest => (<SevenDayForecast className="daySpacing" sevenDayTemp={dayTest.temp.day} sevenDayWeather={dayTest.weather[0].main} sevenDayIcon={dayTest.weather[0].icon } />))}
      </div>
      </div>
  );
}

export default App;
