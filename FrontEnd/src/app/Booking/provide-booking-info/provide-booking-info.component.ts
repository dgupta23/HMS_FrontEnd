import { Component, OnInit } from '@angular/core';
import { ViewBooking } from 'src/app/models/viewbooking.model';
import { ConfirmBookingService } from './provide-booking-info.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provide-booking-info',
  templateUrl: './provide-booking-info.component.html',
  styleUrls: ['./provide-booking-info.component.css']
})
export class ProvideBookingInfoComponent implements OnInit {

  newUser: ViewBooking;
  message:string;
  constructor(private service:ConfirmBookingService, private toasterService: ToastrService,private _router: Router,
    private _route: ActivatedRoute, ) { 
    this.newUser = new ViewBooking();
  }

  ngOnInit() {
  }

  confirmBooking(){
   // console.log(this.hotel);
   this.service.confirmBooking(this.newUser)
   .subscribe(
     data=>{
       this.message=JSON.stringify(data);
       console.log(this.message);
       if((JSON.stringify(data).indexOf("successfully") >= 0)){
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
