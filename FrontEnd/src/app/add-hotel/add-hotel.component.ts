import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Models/hotel';
import { AddHotelService } from './add-hotel.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
 
  hotel: Hotel;
  message:string;
  constructor(private service:AddHotelService, private toasterService: ToastrService,private _router: Router,
    private _route: ActivatedRoute, ) { 
    this.hotel = new Hotel();
  }

  ngOnInit() {
  }

  onSubmit(){
   // console.log(this.hotel);
   this.service.addHotel(this.hotel)
   .subscribe(
     data=>{
       this.message=JSON.stringify(data);
       console.log(this.message);
       if((JSON.stringify(data).indexOf("successfully") >= 0)){
          this.toasterService.success(this.message);
          this._router.navigate(['/home']);}
        else{
          this.toasterService.error(this.message);
          this._router.navigate(['/add-hotel']);
        }
     }
   );
  }

}
