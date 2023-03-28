import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://api.openweathermap.org/data/2.5';
  WEATHER_API_KEY = '06ab1b1928199f70fe686bb08848323b';
  city = "Maribor";

  getWeather() {
    return this.http.get(`${this.url}/weather?q=${this.city}&appid=${this.WEATHER_API_KEY}&units=metric`);
  }

  getForecast() {
    return this.http.get(`${this.url}/forecast?q=${this.city}&appid=${this.WEATHER_API_KEY}&units=metric`);
  }
}
