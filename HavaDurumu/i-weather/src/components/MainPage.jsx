
import React from 'react';
import { useWeatherContext } from './Context';
import moment from 'moment';
import '../styles/MainPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import tempature from '../images/tempature.png';
import wind from '../images/wind.png';
import humadity from '../images/humaditiy.png';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';

function MainPage() {
  const { selectedCity, weatherData } = useWeatherContext(); // WeatherContext'ten weatherData'yı alın
  const now = new Date();

  const formattedDate = moment(now).format('dddd, D MMMM YYYY');
  const formattedTime = moment(now).format('HH:mm');

  let iconUrl = ''; // Icon URL'sini saklamak için boş bir string oluşturun

  if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
    const iconCode = weatherData.weather[0].icon; // Hava durumu ikonunun kodunu alın
    iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`; // Icon URL'sini oluşturun
  }


  const formatUnixTime = (unixTime) => {
    return moment.unix(unixTime).format('HH:mm'); // Saat ve dakika cinsinden format
  };

  const getRecommendations = () => {
    if (weatherData) {
      const temperature = Math.round(weatherData.main.temp); // Dereceleri yuvarla
  
      if (temperature > 25) {
        return "Today's weather is hot! You may prefer light clothes like t-shirts, shorts, and hats. Try to stay protected from the heat as much as possible.";
      } else if (temperature > 15) {
        return "Today's weather is warm. You can wear a light jacket or sweater.";
      } else if (temperature > 5) {
        return "Today's weather is cool. Consider wearing a coat and scarf.";
      } else {
        return "Today's weather is very cold! You may prefer to wear a thick coat, hat, and gloves. Also, don't forget to consume hot drinks.";
      }
    }
    return ""; // Hava durumu verisi yoksa boş bir metin döndür
  };
  

  return (
    <div className='body'>
      <Container className='container' >
        <Row className='row'>
          <Col>
            <div className='card'>
              <div className='today'>
                <div className='info'>
                  <div className='city'>{selectedCity.name},{selectedCity.country}</div>
                  <div className='date'>{formattedDate} {formattedTime}</div>
                </div>
                <div className='card-bottom'>
                  <div className='weather'>
                    {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
                      <div>
                        <div className='temperature'>{Math.round(weatherData.main.temp)}°C</div> {/* Dereceleri yuvarla */}
                        <div className='description1'>{Math.round(weatherData.main.temp_min)}/{Math.round(weatherData.main.temp_max)}</div> {/* Dereceleri yuvarla */}
                        <div className='description'>{weatherData.weather[0].description}</div>
                      </div>
                    )}
                  </div>
                  <div className='icon'>
                    {iconUrl && <img src={iconUrl} alt="Weather Icon" />} {/* Icon URL'si varsa iconu göster */}
                  </div>
                </div>
              </div>
            </div>
            <div className='other-info'>
              <div className='other-info-row'>
                <div style={{display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center"}}>
                <img src={tempature}></img>
                <div className='title'>Feels Like</div>
                </div>
                <div className='value'>{Math.round(weatherData.main.feels_like)}°C</div> {/* Dereceleri yuvarla */}
              </div>
              <div className='other-info-row'>
              <div style={{display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center"}}>
              <img src={wind}></img>
                <div className='title'>Wind Speed</div>
                </div>
                <div className='value'>{Math.round(weatherData.wind.speed)} km/h</div> {/* Dereceleri yuvarla */}
              </div>
              
              <div className='other-info-row'>
              <div style={{display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center"}}>
              <img src={humadity}></img>
                <div className='title'>Air Humidity</div>
                </div>
                <div className='value'>{weatherData.main.humidity}%</div>
              </div>
              <div className='other-info-row'>
              <div style={{display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center"}}>
              <img src={sunrise}></img>
                <div className='title'>Sunrise </div>
                </div>
                <div className='value'>{formatUnixTime(weatherData.sys.sunrise)}</div>
              </div>
              <div className='other-info-row'>
              <div style={{display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center"}}>
              <img src={sunset}></img>
                <div className='title'>Sunset </div>
                </div>
                <div className='value'>{formatUnixTime(weatherData.sys.sunset)}</div>
              </div>
            </div>
          
          </Col>
       
          <Col>
            <div className='recommender'>
              {getRecommendations()} {/* Önerileri ekranda göster */}
            </div>
          </Col>
          {/* <Col>
            <div className='recommender'>
              sonraki 5 gün için hava durumu
            </div>
          </Col> */}
          </Row>
       
      </Container>
    
    </div>
  );
}

export default MainPage;
