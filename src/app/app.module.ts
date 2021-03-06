import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavComponent } from './home/nav/nav.component';
import { BookingComponent } from './home/booking/booking.component';
import { CanteenComponent } from './home/canteen/canteen.component';
import { AdminComponent } from './home/admin/admin.component';
import { EventComponent } from './home/event/event.component';
import { StatsComponent } from './home/stats/stats.component';
import { WorkingComponent } from './home/working/working.component';
import { TeamComponent } from './home/team/team.component';
import { FeaturesComponent } from './home/features/features.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { UpdateBookingComponent } from './home/update-booking/update-booking.component';
import { AlleventlistComponent } from './home/alleventlist/alleventlist.component';
import { SawoComponent } from './home/sawo/sawo.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    BookingComponent,
    CanteenComponent,
    AdminComponent,
    EventComponent,
    StatsComponent,
    WorkingComponent,
    TeamComponent,
    FeaturesComponent,
    AboutComponent,
    ContactComponent,
    UpdateBookingComponent,
    AlleventlistComponent,
    SawoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
