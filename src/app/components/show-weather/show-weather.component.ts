import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/service/weather-service.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {


  currentWeather: any = [];

  constructor(private weatherService: WeatherServiceService){ }

  ngOnInit(): void {

    const savedData = localStorage.getItem('currentWeather');

    if(savedData) {

      const currentWeather = JSON.parse(savedData);
      this.currentWeather = currentWeather;

    }else{

      this.currentWeather =  this.weatherService.getWeather().subscribe((data) => {
        this.currentWeather = data;
        localStorage.setItem('currentWeather', JSON.stringify(this.currentWeather));
      })
    }
  }
}
