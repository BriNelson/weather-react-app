import React from 'react';
import { Card, CardMedia } from '@mui/material';

function SevenDayForecast({ sevenDayTemp, sevenDayWeather, sevenDayIcon }) {
           
  return (
    <>
      <Card sx={{ maxWidth: 70, m:1 }}>
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
