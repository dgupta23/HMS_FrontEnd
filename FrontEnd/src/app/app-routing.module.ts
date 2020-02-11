import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';
import {ProfileComponent} from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';





const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent},
  {path:'add-hotel', component:AddHotelComponent},
  {path:'profile', component: ProfileComponent},
  {path:'aboutus', component: AboutUsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
