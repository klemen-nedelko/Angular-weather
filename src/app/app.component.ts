import { Component, Output, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selected:string ='';

  lang!: string;

  constructor(private weatherService: WeatherServiceService, private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.setDefaultLang(localStorage.getItem('lang') || 'en');
  }
  ngOnInit(): void {
    this.selected = localStorage.getItem('lang') || 'en';

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
  changeLang(lang:any) {
    console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
