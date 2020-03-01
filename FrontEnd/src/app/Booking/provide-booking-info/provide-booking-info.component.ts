import { Component, OnInit } from '@angular/core';
import { ViewBooking } from 'src/app/models/viewbooking.model';
import { ConfirmBookingService } from './provide-booking-info.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/Models/Reservation';
import { BookingLogDetails } from 'src/app/Models/BookingLogDetails';
import { CookieService } from 'ngx-cookie-service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-provide-booking-info',
  templateUrl: './provide-booking-info.component.html',
  styleUrls: ['./provide-booking-info.component.css']
})
export class ProvideBookingInfoComponent implements OnInit {
  hName: string;
  hId: string;
  reservation: Reservation;
  reservations: Reservation[];
  bookingLogDetails: BookingLogDetails;
  checkIn: String;
  checkOut: String;
  selectedHotel: string;
  hotelName:string;


  message: string;
  constructor(private service: ConfirmBookingService, private toasterService: ToastrService, private _router: Router,
    private _route: ActivatedRoute, public cookieService: CookieService) {
    this.reservation = new Reservation();

  }

  ngOnInit() {
    // var date = new Date(localStorage.getItem('checkIn'));
    // this.reservation.checkinDate= date;
    // var date1 = new Date(localStorage.getItem('checkOut'));
    // this.reservation.checkoutDate= date1;
    // console.log(date);
    //this.checkIn =  this.cookieService.get('checkIn').substring(8, 10) + '-' + this.cookieService.get('checkIn').substring(5, 7) + '-' + this.cookieService.get('checkIn').substring(0, 4);
    this.checkOut = this.cookieService.get('checkOut');
    this.checkIn = this.cookieService.get('checkIn');
    this.reservation.checkinDate = new Date(this.checkIn.toString());
    this.reservation.checkoutDate = new Date(this.checkOut.toString());
    this.selectedHotel=this.cookieService.get('selectedHotel');


console.log(this.selectedHotel);


    // new Date(this.checkIn.toString());
    //console.log(this.reservation.checkinDate.toDateString());
  }

  confirmBooking() {
    console.log(this.reservation);

    this.bookingLogDetails = new BookingLogDetails();
    this.reservations = new Array(this.reservation);
    this.bookingLogDetails.reservations = this.reservations;
    this.bookingLogDetails.emailId = "amanraj98@gmail.com";
    this.service.confirmBooking(this.bookingLogDetails)
      .subscribe(
        data => {
          this.message = JSON.stringify(data);
          console.log(this.message);
          if ((JSON.stringify(data).indexOf("successful") >= 0)) {

            this._router.navigate(['/payment']);
          }
          else {
            this.toasterService.error(this.message);
            this._router.navigate(['/home']);
          }
        }
      );
  }

}
