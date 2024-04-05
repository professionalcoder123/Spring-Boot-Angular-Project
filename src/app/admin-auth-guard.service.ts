import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private adminAuthService:AdminAuthService,private router:Router) { }

  canActivate() {
    if(this.adminAuthService.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['adlogin'])
      return false; 
    }
  }
}
