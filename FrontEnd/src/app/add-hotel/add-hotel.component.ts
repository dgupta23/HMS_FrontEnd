import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Models/hotel';
import { AddHotelService } from './add-hotel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
 
  hotel: Hotel;
  message:string;
  constructor(private service:AddHotelService, private toasterService: ToastrService) { 
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
       if((JSON.stringify(data).indexOf("successfully") >= 0))
          this.toasterService.success(this.message);
        else
          this.toasterService.error(this.message);
     }
   );
  }

}
