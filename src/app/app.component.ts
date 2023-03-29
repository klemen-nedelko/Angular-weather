import { Component, Output, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WeatherServiceService } from './service/weather-service.service';
import * as moment from "moment";
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading$ = this.loader.loading$;
  selected:string ='';
  lang!: string;
  dateMoment = moment().format('DD.MM.YYYY');
  formatTime = moment().format('HH:mm');

  constructor(private weatherService: WeatherServiceService, private translate: TranslateService,
    public loader: LoadingService, private loadingService: LoadingService) {
    this.translate.setDefaultLang('en');
    this.translate.setDefaultLang(localStorage.getItem('lang') || 'en');
  }
  ngOnInit(): void {
    this.selected = localStorage.getItem('lang') || 'en';
  }

  refreshWeather() {
    this.loadingService.show();
    this.weatherService.getWeather().subscribe(()=>{
      this.loadingService.hide();
    });
    this.weatherService.getForecast().subscribe(()=>{
      this.loadingService.hide();
    });;
  }

  changeLang(lang:any) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
