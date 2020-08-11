import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  public STATEDATA_URL: string ='https://api.covid19india.org/data.json';
  public DISTRICT_DATA_URL: string ='https://api.covid19india.org/v2/state_district_wise.json';
  constructor(public http: Http ) { }
  getStateData(){
    return this.http.get(this.STATEDATA_URL).pipe(map(res =>{
      return res.json();
    }))
  }

  getDistrictData(){
    return this.http.get(this.DISTRICT_DATA_URL).pipe(map(res =>{
      return res.json();
    }))
  }

}
