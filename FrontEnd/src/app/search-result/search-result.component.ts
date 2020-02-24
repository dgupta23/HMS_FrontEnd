import { Component, OnInit } from '@angular/core';
import { SearchResultService } from './search-result.service';
import { UserLoginServiceModule } from '../user/login/login.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public hidden : boolean;
  location:string;
  checkInDate:Date;
  checkOutDate:Date;
  minPrice:number;
  maxPrice:number;
  hotels;
  loggedUser: any = null;
  user_status: any = null;
  constructor(private service:SearchResultService) { }

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
    this.service.searchHotel(this.location,this.checkInDate,this.checkOutDate,this.minPrice,this.maxPrice).subscribe(
      data=>{
        this.hotels=data;
      }
    );
    this.hidden= false;
  }

}