import { WeatherServiceService } from 'src/app/weather-service.service';
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
    this.weatherService.getForecast().pipe(pluck("list")).subscribe((data) => {
      this.getWeatherForecast(data);
    })
  }
  getWeatherForecast(data: any){
    for(let i = 0; i < data.length; i = i + 8) {
      this.weatherData.push(data[i]);
    }
  }

}
