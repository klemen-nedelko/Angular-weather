import { WeatherServiceService } from 'src/app/service/weather-service.service';
import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  weatherData:any = [];

  constructor(private weatherService: WeatherServiceService ){}

  ngOnInit():void {

    const forecastSavedData = localStorage.getItem('forecastWeather');

    if(forecastSavedData) {
      const forecast = JSON.parse(forecastSavedData);
      this.weatherData = forecast;

    } else {

      this.weatherService.getForecast().pipe(pluck("list")).subscribe((data) => {
        this.getWeatherForecast(data);
        localStorage.setItem('forecastWeather', JSON.stringify(this.weatherData));
      })
    }
  }

  getWeatherForecast(data: any){
    for(let i = 0; i < data.length; i = i + 8) {
      this.weatherData.push(data[i]);
    }
  }

}
