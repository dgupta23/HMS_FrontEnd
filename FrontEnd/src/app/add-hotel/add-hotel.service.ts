import { Injectable } from '@angular/core';

import { Hotel } from 'src/app/models/hotel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddHotelService {

  private addHotelUrl = "http://localhost:8500/hotel-catalogue";

  constructor( private http:HttpClient) {
    
   }

  addHotel(hotel:Hotel){
    return this.http.post(this.addHotelUrl+"/add-hotel",hotel,{ responseType: 'text' });
  }
}
