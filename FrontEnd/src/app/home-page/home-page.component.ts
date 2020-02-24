import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';
import { UserLoginServiceModule } from '../user/login/login.service';

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
  loggedUser: any = null;
  user_status: any = null;
  constructor(private service:HomePageService) { }

  ngOnInit() {
    this.hidden =true;

    if (localStorage.length > 0) {
      var i = 0,
    sKey;
  
      this.loggedUser = JSON.stringify(localStorage.getItem('currentUser'));
      this.user_status = +JSON.parse(localStorage.getItem('currentUser'))["Status"];

      
    }
    else {
      UserLoginServiceModule.loginEventEmitter.subscribe((data) => {
        this.loggedUser = UserLoginServiceModule.loggedINUser;
        this.user_status= JSON.parse(localStorage.getItem('currentUser'))["Status"];
       
      });
    }
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
