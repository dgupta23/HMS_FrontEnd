import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewBooking } from 'src/app/models/viewbooking.model';

@Injectable({
  providedIn: 'root'
})
export class ViewBookingService {

  private viewBookingUrl = "http://localhost:8010//user-profile//view-my-bookings/";
  private emailID = JSON.parse(localStorage.getItem('currentUser'))["mail"];

  
  constructor( private http:HttpClient) {
    
  }

  viewBooking(){
    return this.http.get(this.viewBookingUrl+this.emailID);
    //return this.http.get(this.viewBookingUrl+"rishav@gmail.com");
    // return this.http.get(this.viewBookingUrl+"amanraj98@gmail.com");
  }

  // searchHotelForAdmin(location:string){
  //   return this.http.get<Hotel[]>(this.searchAdminHotelUrl+location);
  // }
  
}
