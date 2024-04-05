import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthGuardService implements CanActivate {

  constructor(private docAuthService:DocauthService,private router:Router) { }
  
  canActivate() {
    if(this.docAuthService.isUserLoggedIn()){
      return true
    }
    else{
      this.router.navigate(['doclogin'])
      return false
    }
  }
}
