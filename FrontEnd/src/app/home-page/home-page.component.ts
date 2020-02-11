import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public hidden : boolean;
  location:string;
  checkInDate:Date;
  checkOutDate:Date;
  hotels;
  constructor(private service:HomePageService) { }

  ngOnInit() {
    this.hidden =true;
  }

  onSubmit(){
    this.service.searchHotel(this.location,this.checkInDate,this.checkOutDate).subscribe(
      data=>{
        this.hotels=data;
        console.log(this.hotels);
        
      }
    );
    this.hidden= false;
  }

  // onSubmitForAdmin(){
  //   this.service.searchHotelForAdmin(this.location).subscribe(
  //     data=>{
  //       this.hotels=data;
  //       console.log(this.hotels);
  //     }
  //   )
  // }

}
