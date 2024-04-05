import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {
  username:string="";
  password:string="";
  invalidLogin=false;

  constructor(private router:Router,private adminAuthService:AdminAuthService){}

  checkLogin(){
    if(this.adminAuthService.authenticate(this.username,this.password)){
      this.router.navigate(['admin'])
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true
      alert("Wrong Credentials!")
      this.router.navigate(['home'])
    }
  }
}
