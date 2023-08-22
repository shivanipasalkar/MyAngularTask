import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Login } from './Models/login';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor( private authService:AuthService  ,private router: Router) {

  }
  canActivate(): boolean {
    //authentication
    if (this.authService.act == undefined) {
      this.router.navigate(['login']);
      return true;
    }
    //authorization
    else if (this.authService.act== true) {
      return true;
    }
    else{
      return false;
    }
  //   else {
  //     this.router.navigate(['unauthorize']);
  //     return true;
  //   }
   }
}
