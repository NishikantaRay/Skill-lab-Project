import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './home/admin/admin.component';
import { BookingComponent } from './home/booking/booking.component';
import { CanteenComponent } from './home/canteen/canteen.component';
import { EventComponent } from './home/event/event.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { StatsComponent } from './home/stats/stats.component';

const routes: Routes = [ { path: 'login', component: LoginComponent}
,{path:'signup',component:SignupComponent} ,
{path:'book',component:BookingComponent},
{path:'canteen',component:CanteenComponent},
{path:'admin',component:AdminComponent},
{path:'event',component:EventComponent},
{path:'stats',component:StatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
