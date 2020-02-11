import { Component, OnInit } from '@angular/core';
import { ViewBookingService } from './view-booking.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  public hidden : boolean;
 public views;
  constructor(private service:ViewBookingService) { }

  ngOnInit() {
    this.hidden =true;
  }
  viewBookings(){
    this.service.viewBooking().subscribe(
      data=>{
        this.views=data;
        this.hidden= false;
        console.log(this.views);
        
      }
    )
    
  }

}
