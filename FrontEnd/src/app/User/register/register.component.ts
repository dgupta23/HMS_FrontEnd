import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { UserRegisterServiceModule } from './register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  @ViewChild('userRegistrationform', null) public  userRegForm : NgForm;
  newUser: User =
  {
      name : null,
      mail: null,
      password : null,
      phone : null,
      category : null,
      Status : null,
  }
  message : string;
    errMsg : string;
    constructor(private _registerservice: UserRegisterServiceModule, private _router: Router,
        private _route: ActivatedRoute, private toasterService : ToastrService) { }
 
  ngOnInit() {
    this.message = " Registration Succesful ";
    this.errMsg = " Error in Registering";
  }
  registeringUser():void{
    let regUser : User = Object.assign({},this.newUser);
    this._registerservice.loginUser(regUser).subscribe(
      data => {
        if (JSON.stringify(data).indexOf("User added successfully") >= 0) {

          this.toasterService.success(
            JSON.stringify(data),
            this.message,
            {
              timeOut: 8000,
              closeButton: true,
              progressBar: true,
            })
          this.userRegForm.reset();
          this._router.navigate(['/home']);
        }
        else {

          this.toasterService.error(
            JSON.stringify(data),
            this.errMsg,
            {
              timeOut: 8000,
              closeButton: true,
              progressBar: true,
            })
          this.userRegForm.reset();
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
        this.userRegForm.reset();
        this._router.navigate(['/home']);
      }
    );
   
  }
}
