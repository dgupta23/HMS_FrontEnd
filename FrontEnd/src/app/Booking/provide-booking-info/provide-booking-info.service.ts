import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingLogDetails } from 'src/app/Models/BookingLogDetails';

@Injectable({
  providedIn: 'root'
})
export class ConfirmBookingService {

  private confirmBookUrl = "http://localhost:8400/hotel-booking/reserve-rooms";

  constructor( private http:HttpClient) {
    
   }

  confirmBooking(bookingLogDetails:BookingLogDetails){
    return this.http.post(this.confirmBookUrl,bookingLogDetails,{ responseType: 'text' });
  }
}
