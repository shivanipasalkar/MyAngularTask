import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/Models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
 username:string='';
 password:string='';
  returnUrl: string | undefined;
  error: string | undefined='Welcome';
  
  constructor(private authservice:AuthService, private router: Router) {
   
  }
 
  LoginUser( form : NgForm) {
    if (form.valid) { //User Id: user@gmail.com Password : 12345678
     
     this.username=form.value.username;
       this.password=form.value.password; 

       this.authservice.isLoggedIn(this.username,this.password);
   
    }
    else{
      this.error = 'Please Enter Valid Username or Password !';
    }
  }
}


