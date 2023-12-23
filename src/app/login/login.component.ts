import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  
  password:any;
  abc:any;
  email = new FormControl('', [Validators.required, Validators.email]);

  Submit(){
    if (this.email ===  this.password) {
      alert("Logined Successfully")
    }
    else {
      alert("Please enter valid values");
    }
    let obj = {
      email: this.email,
      password: this.password
    }
    this.abc.push(obj);
    
    console.log("Submitted: ", this.abc);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
