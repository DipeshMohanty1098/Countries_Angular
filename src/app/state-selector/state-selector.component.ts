import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Country from '../models/country';
import { CountryServiceService } from '../services/country-service.service';
@Component({
  selector: 'app-state-selector',
  templateUrl: './state-selector.component.html',
  styleUrls: ['./state-selector.component.css']
})
export class StateSelectorComponent implements OnInit {
  countries: Country[]
  selectedCountry = 'Afghanistan'
  states: string[]
  constructor(private _countries: CountryServiceService) { }

  
  getStates(c:string){
    this._countries.getCountry(c).subscribe(
      country=>{
        this.states = country['states']
      }
    )
    console.log(this.states); 

  }

  ngOnInit(): void {
    this._countries.getCountries().subscribe(
      countries=>{
        this.countries = countries
      }
    )
  
    this._countries.getCountry(this.selectedCountry).subscribe(
      country=>{
        this.states = country['states']
      }
    )
    console.log(this.states);
    
  }

}
