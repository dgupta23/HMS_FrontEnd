import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProvideBookingInfoComponent } from './Booking/provide-booking-info/provide-booking-info.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PaymentInfoComponent } from './Booking/payment-info/payment-info.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserLoginServiceModule } from './user/login/login.service';
import { UserRegisterServiceModule } from './user/register/register.service';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import {AddHotelService} from './add-hotel/add-hotel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchResultService } from './search-result/search-result.service';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewBookingService } from './view-booking/view-booking.service';
import { PaymentConfirmationComponent } from './Booking/payment-confirmation/payment-confirmation.component';
import { NgxLoadingModule ,  ngxLoadingAnimationTypes} from 'ngx-loading';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ProvideBookingInfoComponent,
    SearchResultComponent,
    PaymentInfoComponent,
    LoginComponent,
    RegisterComponent,
    AddHotelComponent,
    ProfileComponent,
    FooterComponent,
    AboutUsComponent,
    ViewBookingComponent,
    PaymentConfirmationComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.8)', 
        backdropBorderRadius: '4px',
        primaryColour: 'rebeccapurple', 
        secondaryColour: 'orange', 
        tertiaryColour: 'white'
    }),
    Ng2SearchPipeModule ,
    
  ],
  providers: [UserLoginServiceModule,UserRegisterServiceModule,AddHotelService,SearchResultService,ViewBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
