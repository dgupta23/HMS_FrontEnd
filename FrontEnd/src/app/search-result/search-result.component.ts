import { Component, OnInit } from '@angular/core';
import { SearchResultService } from './search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public hidden : boolean;
  location:string;
  checkInDate:Date;
  checkOutDate:Date;
  minPrice:number;
  maxPrice:number;
  hotels;
  constructor(private service:SearchResultService) { }

  ngOnInit() {
    this.hidden =true;
  }

  onSubmit(){
    this.service.searchHotel(this.location,this.checkInDate,this.checkOutDate,this.minPrice,this.maxPrice).subscribe(
      data=>{
        this.hotels=data;
      }
    );
    this.hidden= false;
  }

}