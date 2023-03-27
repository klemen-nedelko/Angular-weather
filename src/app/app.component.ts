import { Component, Output, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherServiceService){}
  ngOnInit(): void {

  }

  @Output()
  currentWeather: any = [];


  currentTime = new Date();

  refreshWeather(){

    this.weatherService.getWeather().subscribe((data) => {
      this.currentWeather = data;
  })

  this.currentTime = new Date();
  this.ngOnInit();
  console.log(this.currentWeather);
  }
}
