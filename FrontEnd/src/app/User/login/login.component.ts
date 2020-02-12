import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { UserLoginServiceModule } from './login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userLoginform', null) public userLogForm: NgForm;

  existUser: User =
    {
      name: null,
      mail: null,
      password: null,
      phone: null,
      category: null,
      Status: null,
    }

  message: string;
  errMsg: string;
  constructor(private _userservice: UserLoginServiceModule, private _router: Router,
    private _route: ActivatedRoute, private toasterService: ToastrService) { }

  ngOnInit() {

    this.message = "User Logged In Succesful ";
    this.errMsg = " Error in Logging in";
   
  }


  loginUser(): void {
    let loguser: User = Object.assign({}, this.existUser);
    this._userservice.loginUser(loguser).subscribe(
      data => {
        console.log(data)
        if ((JSON.stringify(data).indexOf("User Cannot be logged-in!!!") >= 0)) {
          
          this.toasterService.error(
            JSON.stringify(data),
            this.errMsg,
            {
              timeOut: 8000,
              closeButton: true,
              progressBar: true,
            })
          this.userLogForm.reset();
          this._router.navigate(['/home']);

                    
        }
        else {
          this.toasterService.success(
            "Login Successfull ! Welcome to NIRMAN",
            this.message,
            {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            })
            
          localStorage.setItem('currentUser', data);
          console.log(JSON.stringify(localStorage.getItem('currentUser'))["mail"]);
          UserLoginServiceModule.loggedINUser = JSON.stringify(localStorage.getItem('currentUser'));
          UserLoginServiceModule.loginEventEmitter.emit(UserLoginServiceModule.loginEventEmitter);
          this.userLogForm.reset();
          this._router.navigate(['/home']);

   
          
         
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
        this.userLogForm.reset();
        this._router.navigate(['/home']);
      }
    );

  }


}