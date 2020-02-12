import { Component, OnInit } from '@angular/core';
import { ViewBooking } from 'src/app/models/viewbooking.model';
import { ConfirmBookingService } from './provide-booking-info.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/Models/Reservation';
import { BookingLogDetails } from 'src/app/Models/BookingLogDetails';

@Component({
  selector: 'app-provide-booking-info',
  templateUrl: './provide-booking-info.component.html',
  styleUrls: ['./provide-booking-info.component.css']
})
export class ProvideBookingInfoComponent implements OnInit {

  reservation:Reservation;
  reservations:Reservation[];
  bookingLogDetails:BookingLogDetails;

  message:string;
  constructor(private service:ConfirmBookingService, private toasterService: ToastrService,private _router: Router,
    private _route: ActivatedRoute, ) { 
      this.reservation=new Reservation();
      this.reservations.push(this.reservation);
      this.bookingLogDetails.reservationList.reservations=this.reservations;
      this.bookingLogDetails.emailID="akash@gmail.com";
  }

  ngOnInit() {
    
  }

  confirmBooking(){
   // console.log(this.hotel);
   this.service.confirmBooking(this.bookingLogDetails)
   .subscribe(
     data=>{
       this.message=JSON.stringify(data);
       console.log(this.message);
       if((JSON.stringify(data).indexOf("successful") >= 0)){
          this.toasterService.success(this.message);
          this._router.navigate(['/payment']);}
        else{
          this.toasterService.error(this.message);
          this._router.navigate(['/']);
        }
     }
   );
  }

}
