import { Injectable } from '@angular/core';

import {ViewBooking } from 'src/app/models/viewbooking.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmBookingService {

  private confirmBookUrl = "http://localhost:8400/hotel-booking/reserve-rooms";

  constructor( private http:HttpClient) {
    
   }

  confirmBooking(newUser:ViewBooking){
    return this.http.post(this.confirmBookUrl,newUser,{ responseType: 'text' });
  }
}
