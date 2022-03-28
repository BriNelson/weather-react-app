import React from 'react';
import { Card, CardMedia } from '@mui/material';

function SevenDayForecast({ sevenDayTemp, sevenDayWeather, sevenDayIcon, date }) {
    let dateObj = new Date(date * 1000)
    let newArray = dateObj.toString().split(/\s+/)


         
  return (
    <>
          <Card sx={{ maxWidth: 70, m: 1 }}>
              <p>{newArray[0]}</p>  
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
    


export default SevenDayForecast;
