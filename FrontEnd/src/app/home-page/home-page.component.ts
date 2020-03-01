import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';
import { UserLoginServiceModule } from '../user/login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public hidden: boolean;
  location: string;
  checkInDate: Date;
  checkOutDate: Date;
  hotels;
  minPrice:number;
  maxPrice:number;
  loggedUser: any = null;
  user_status: any = null;
  cookieValue: String;
  hotel: Hotel[];
  constructor(private router: Router, private service: HomePageService, public cookieService: CookieService) { }

  public ngOnInit() {
    this.hidden = true;

    if (localStorage.length > 0) {
      var i = 0,
        sKey;

      this.loggedUser = JSON.stringify(localStorage.getItem('currentUser'));
      this.user_status = +JSON.parse(localStorage.getItem('currentUser'))["Status"];


    }
    else {
      UserLoginServiceModule.loginEventEmitter.subscribe((data) => {
        this.loggedUser = UserLoginServiceModule.loggedINUser;
        this.user_status = JSON.parse(localStorage.getItem('currentUser'))["Status"];

      });
    }
  }

  onSubmit() {
    // localStorage.setItem('loc',this.location);
    this.cookieService.set('checkIn', this.checkInDate.toString());
    this.cookieService.set('checkOut', this.checkOutDate.toString());

    this.service.searchHotel(this.location, this.checkInDate, this.checkOutDate).subscribe(
      data => {
        this.hotels = data;
        console.log(this.hotels);
        this.cookieService.set('hotels',this.hotels);
     
      }
    );
    this.hidden = false;




  }

  filtered(){
    this.service.searchHotels(this.location,this.checkInDate,this.checkOutDate,this.minPrice,this.maxPrice).subscribe(
      data=>{
        this.hotels=data;
        console.log("hi");
        console.log(this.hotels);
        console.log("bye");
      }
    );
  }
w3_open() {

  document.getElementById("mySidebar").style.width = "15%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
  }
  
w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
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
