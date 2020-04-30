import { Component } from '@angular/core';
import { WeatherService} from './services/weather.service';

// Part C: App Component =  the third component will enclose
// and be the parent of the form (parent) and results (child) components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Angular App';
  constructor() {
  }
}
