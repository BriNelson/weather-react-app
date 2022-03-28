import React from 'react';

function TodayWeather({temperature, weather, city, date}) {
  
    return (
      <>
        
        <h3>{city}</h3>
        <p> {temperature}</p>
        <p> {weather}</p>
        {/* <p> {date[0] + "," + date[1] + "," + date[3] + ""} </p> */}
        
    
      </>
    )
  }

export default TodayWeather;
