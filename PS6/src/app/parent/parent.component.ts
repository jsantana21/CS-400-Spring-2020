import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

// Part C: Parent component =  first component that holds the form (child) component
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  countryAbbreviation: string;
  zipCode: string;
  responseData = [];

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
  }

  // Part A: Use a validated form [require the input term and validate it is longer than 1
  // character] and a ‘query’ button on your Angular app to initiate the request,
  // passing any search term that you might need for your back-end API.
  validatedGetWeatherForm(countryAbbreviation, zipCode){
    this.countryAbbreviation = countryAbbreviation;
    this.zipCode = zipCode;
    if (countryAbbreviation != null && zipCode != null){
      this.weather.getWeather(this.countryAbbreviation, this.zipCode).subscribe(
        response => {
          console.log(response);
          this.responseData.push(response);
        }
      );
    } else{
      throw new Error('InvalidInputException');
    }
  }
}
