import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPipe } from './search.pipe';
import { CarsComponent } from './cars/cars.component';
import { PartsComponent } from './parts/parts.component';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    PartsComponent,
    StaffComponent,
    CarsComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule, 
    FormsModule, ReactiveFormsModule, NgIf,MatToolbarModule, MatDatepickerModule, MatSelectModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
