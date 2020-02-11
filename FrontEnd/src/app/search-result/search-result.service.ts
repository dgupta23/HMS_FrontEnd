import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  private filterHotelUrl = "http://localhost:8200/hotel-explore/filter-hotel/";

  constructor( private http:HttpClient) {
    
  }

  public searchHotel(location:string,checkInDate:Date,checkOutDate:Date,minPrice:number,maxPrice:number){
    return this.http.get<Hotel[]>(this.filterHotelUrl+location+"/"+checkInDate+"/"+checkOutDate+"/"+minPrice+"/"+maxPrice);
  }
  
}
