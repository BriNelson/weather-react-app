import React from 'react';

function TodayWeather({temperature, weather, city}) {
  
    return (
      <>
        
        <h3>{city}</h3>
        <p> {temperature}</p>
        <p> {weather}</p>
        
    
      </>
    )
  }

export default TodayWeather;
