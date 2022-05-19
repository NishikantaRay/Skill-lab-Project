import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { AdminComponent } from './home/admin/admin.component';
import { BookingComponent } from './home/booking/booking.component';
import { CanteenComponent } from './home/canteen/canteen.component';
import { ContactComponent } from './home/contact/contact.component';
import { EventComponent } from './home/event/event.component';
import { FeaturesComponent } from './home/features/features.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { NavComponent } from './home/nav/nav.component';
import { SignupComponent } from './home/signup/signup.component';
import { StatsComponent } from './home/stats/stats.component';
import { TeamComponent } from './home/team/team.component';
import { WorkingComponent } from './home/working/working.component';

const routes: Routes = [ 
{ path: 'login', component: LoginComponent},
{path:'signup',component:SignupComponent} ,
{path:'book',component:BookingComponent},
{path:'canteen',component:CanteenComponent},
{path:'admin',component:AdminComponent},
{path:'event',component:EventComponent},
{path:'stats',component:StatsComponent},
{path:'work',component:WorkingComponent},
{path:'team',component:TeamComponent},
{path:'feature',component:FeaturesComponent},
{path:'about',component:AboutComponent},
{path:'nav',component:NavComponent},
{path:'footer',component:FooterComponent},
{path:'home',component:HomeComponent},
{path:'contact',component:ContactComponent},
{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
