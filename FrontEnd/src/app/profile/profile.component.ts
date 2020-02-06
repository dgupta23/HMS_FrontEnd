import { Component, OnInit } from '@angular/core';
import { UserLoginServiceModule } from '../User/login/login.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  category: any;
  name: string;
  mail: string;
  phone: string;

  constructor() { }

  ngOnInit() {

    if (localStorage.length > 0) {


      this.category = +JSON.parse(localStorage.getItem('currentUser'))["category"];
      if (this.category === false) {
        this.category = "Admin"
      }
      else {
        this.category = "Customer"
      }


      this.name = JSON.parse(localStorage.getItem('currentUser'))["name"];
      this.mail = JSON.parse(localStorage.getItem('currentUser'))["mail"];
      this.phone = JSON.parse(localStorage.getItem('currentUser'))["phone"];


    }
    else {
      UserLoginServiceModule.loginEventEmitter.subscribe((data) => {

        this.category = +JSON.parse(localStorage.getItem('currentUser'))["category"];
        if (this.category === false) {
          this.category = "Admin"
        }
        else {
          this.category = "Customer"
        }


        this.name = JSON.parse(localStorage.getItem('currentUser'))["name"];
        this.mail = JSON.parse(localStorage.getItem('currentUser'))["mail"];
        this.phone = JSON.parse(localStorage.getItem('currentUser'))["phone"];
      });

    }
  }
}

