import { Component, OnInit, Input } from '@angular/core';
import { WeatherServiceService } from 'src/app/weather-service.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {

  @Input()
  currentWeather: any = [];
  timeline:any = [];
  weatherNow: any;


  constructor(private weatherService: WeatherServiceService){ }

  ngOnInit(): void {
      this.weatherService.getWeather().subscribe((data) => {
        this.currentWeather = data;
    })
  }

}
