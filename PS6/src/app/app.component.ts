import { Component } from '@angular/core';
import {WeatherDataArray} from './Weather Data MOCK';
import {WeatherData} from './Weather Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Weather Angular App';
  weather = WeatherDataArray;
  private selectedData: WeatherData;

  selectData(data: WeatherData) {
    this.selectedData = data;
  }
}
