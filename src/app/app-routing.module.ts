import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { BillingComponent } from './billing/billing.component';
import { StaffComponent } from './staff/staff.component';
import { PartsComponent } from './parts/parts.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'parts', component:PartsComponent
  },
  {
    path:'staff', component:StaffComponent
  },
  {
    path:'cars', component:CarsComponent
  },
  {
    path:'billing', component:BillingComponent
  },
  {
    path:'footer', component:FooterComponent
  },
  {
    path:'navbar', component:NavbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
