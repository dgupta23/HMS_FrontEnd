import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserLoginServiceModule } from '../user/login/login.service';
import { combineAll } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser: any = null;
  user_role: any = null;
  name : string ;
  mail : string;
  message : string;
  errMsg : string = "Logging Out Error";
  constructor(     private router: Router, private _userService : UserLoginServiceModule,
     private toasterService : ToastrService) {

  }
  ngOnInit() {

    
    if (localStorage.length > 0) {
      var i = 0,
    sKey;
    for (; sKey = localStorage.key(i); i++) {
      if(i=0){
        this.name=JSON.stringify(localStorage.getItem(sKey));
        console.log(this.name);
        break;
      }
    }
      this.loggedUser = JSON.stringify(localStorage.getItem('currentUser'));
      this.user_role = +JSON.parse(localStorage.getItem('currentUser'))["category"];
      this.name = JSON.parse(localStorage.getItem('currentUser'))["name"];
      this.mail = JSON.parse(localStorage.getItem('currentUser'))["mail"];
      this.message = JSON.parse(localStorage.getItem('currentUser'))["name"] + "succesfully logged out";
      
    }
    else {
      UserLoginServiceModule.loginEventEmitter.subscribe((data) => {
        this.loggedUser = UserLoginServiceModule.loggedINUser;
        this.user_role = JSON.parse(localStorage.getItem('currentUser'))["category"];
        this.name = JSON.parse(localStorage.getItem('currentUser'))["name"];
        this.mail = localStorage.getItem('currentUser')["mail"];
        this.message = JSON.parse(localStorage.getItem('currentUser'))["name"] + "succesfully logged out";
     
      });
    }
  }


    // JSON.parse(sessionStorage.getItem('currentUser'));


  

  logout(){
    localStorage.clear();
    console.log(this.mail);
    this._userService.logout(this.mail).subscribe(
      data => {
        console.log( this.name);
        if (JSON.stringify(data).indexOf("success") >= 0) {

          this.toasterService.success(
            "Logout Successfull ",
            this.message,
            {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            })
          localStorage.setItem('currentUser', JSON.stringify(data));
          UserLoginServiceModule.loggedINUser = JSON.stringify(localStorage.getItem('currentUser'));
          UserLoginServiceModule.loginEventEmitter.emit(UserLoginServiceModule.loginEventEmitter); 
          this.router.navigate(['/home']);
        }
        else {
          console.log( "hi");
          this.toasterService.error(
            JSON.stringify(data),
            this.errMsg,
            {
              timeOut: 8000,
              closeButton: true,
              progressBar: true,
            })
          this.router.navigate(['/home']);

        }
      },
      error => {
        console.log("Error :" + JSON.stringify(error));
        this.toasterService.warning(
          JSON.stringify(error),
          this.errMsg,
          {
            timeOut: 8000,
            closeButton: true,
            progressBar: true,
          })
        
        this.router.navigate(['/home']);
      }
    );

  
    UserLoginServiceModule.loggedINUser = null;
    UserLoginServiceModule.loginEventEmitter.emit(UserLoginServiceModule.loggedINUser);
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
