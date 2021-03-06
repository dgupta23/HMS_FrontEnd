import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';
import {ProfileComponent} from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FooterComponent } from './footer/footer.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ProvideBookingInfoComponent } from './Booking/provide-booking-info/provide-booking-info.component';
import { PaymentInfoComponent } from './Booking/payment-info/payment-info.component';
import { PaymentConfirmationComponent } from './Booking/payment-confirmation/payment-confirmation.component';





const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent},
  {path:'add-hotel', component:AddHotelComponent},
  {path:'profile', component: ProfileComponent},
  {path:'aboutus', component: AboutUsComponent},
  {path:'filter', component: SearchResultComponent},
  {path:'footer', component:FooterComponent},
  {path:'view-booking', component:ViewBookingComponent},
  {path:'confirm-booking',component:ProvideBookingInfoComponent},
  {path:'payment',component:PaymentInfoComponent},
  {path:'payment-confirm',component: PaymentConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
