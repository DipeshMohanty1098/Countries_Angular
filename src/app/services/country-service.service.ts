import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import Country from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private _http: HttpClient) {}

  getCountries(): Observable<Country[]>{
    return this._http.get<any>('http://localhost:3000/countries')
  }
  
  getCountry(country: string): Observable<Country[]>{
    return this._http.get<any>(`http://localhost:3000/countries/${country}`)
  }
}
