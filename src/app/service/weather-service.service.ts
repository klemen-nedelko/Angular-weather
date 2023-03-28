import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://api.openweathermap.org/data/2.5';
  WEATHER_API_KEY = '06ab1b1928199f70fe686bb08848323b';
  lat = "46.55";
  lon = "15.633333333";
  // const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
  //const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);



  getWeather(){
    return this.http.get(`${this.url}/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.WEATHER_API_KEY}&units=metric`);
  }

  getForecast(){
    return this.http.get(`${this.url}/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this.WEATHER_API_KEY}&units=metric`);
  }


}
