import { TestBed } from '@angular/core/testing';

import { WeatherServiceService } from '../service/weather-service.service';

describe('WeatheServiceService', () => {
  let service: WeatherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
