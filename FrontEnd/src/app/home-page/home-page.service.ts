import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private searchHotelUrl = "http://localhost:8200/hotel-explore/search-hotel/";
  private filterHotelUrl = "http://localhost:8200/hotel-explore/filter-hotel/";
  //private searchAdminHotelUrl="http://localhost:8500/hotel-catalogue/get-hotels/";
  
  constructor( private http:HttpClient) {
    
  }

  searchHotel(location:string, checkInDate:Date, checkOutDate:Date){
    return this.http.get<Hotel[]>(this.searchHotelUrl+location+"/"+checkInDate+"/"+checkOutDate);
  }
  public searchHotels(location:string,checkInDate:Date,checkOutDate:Date,minPrice:number,maxPrice:number){
    return this.http.get<Hotel[]>(this.filterHotelUrl+location+"/"+checkInDate+"/"+checkOutDate+"/"+minPrice+"/"+maxPrice);
  }
  // searchHotelForAdmin(location:string){
  //   return this.http.get<Hotel[]>(this.searchAdminHotelUrl+location);
  // }
  
}
