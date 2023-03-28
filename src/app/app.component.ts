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

  constructor(private weatherService: WeatherServiceService, private translate: TranslateService, public loader: LoadingService) {
    this.translate.setDefaultLang('en');
    this.translate.setDefaultLang(localStorage.getItem('lang') || 'en');
  }
  ngOnInit(): void {
    this.selected = localStorage.getItem('lang') || 'en';

  }

  @Output()
  currentWeather: any = [];
  dateMoment = moment().format('DD.MM.YYYY');
  formatTime = moment().format('HH:mm');

  refreshWeather(){
  //   this.weatherService.getWeather().subscribe((data) => {
  //     this.currentWeather = data;
  // })
  console.log("refresh");
  }
  changeLang(lang:any) {
    console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
