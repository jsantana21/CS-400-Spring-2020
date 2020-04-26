import { Component } from '@angular/core';
import { WeatherDataArray } from './WeatherData-MOCK';
import {WeatherData} from './WeatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Angular App';
  weather = WeatherDataArray;
  // For some reason, I'm getting this error:
  // error TS2341: Property 'selectedData' is private and only accessible within class 'AppComponent'.
  // whenever I set 'selectedData' to private
  // The error disappears however when I leave selectedData public
  private selectedData: WeatherData;

  selectData(data: WeatherData) {
    this.selectedData = data;

  }
}
