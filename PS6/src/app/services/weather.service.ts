import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherConfigs as config} from '../config/weatherConfigs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // Part B: use a service to make the call to the back-end route.
  getWeather(countryAbbreviation, zipCode){
    // API Call from PS4
    const url = `http://api.weatherunlocked.com/api/current/${countryAbbreviation}.${zipCode}?app_id=${config.apiID}&app_key=${config.apiKey}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }
}
