import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 act:boolean|undefined;
  constructor(private router:Router) { }

  isLoggedIn(un:string ,pwd:string){
    if(
      un ==  'user@gmail.com' && pwd=='12345678'
    ){
      alert('You are Successfully Logged In');
      this.act=true;
      this.router.navigate(['/user']);
    }
    else{
      alert('please Enter Valid Details!');
    }
  }
}
