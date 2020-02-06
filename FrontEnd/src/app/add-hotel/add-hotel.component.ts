import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Models/hotel';
import { AddHotelService } from './add-hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
 
  hotel: Hotel;
  success:string;
  constructor(private service:AddHotelService) { 
    this.hotel = new Hotel();
  }

  ngOnInit() {
  }

  onSubmit(){
   // console.log(this.hotel);
   this.service.addHotel(this.hotel)
   .subscribe(
     data=>{
       this.success=JSON.stringify(data);
       console.log(this.success);
       
     }
   );
  }

}
