import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=='admin'&&password=="Admin123"){
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false
    }
  }

  isUserLoggedIn(){
    console.log("User is logged in!")
    let user=sessionStorage.getItem('username')
    return !(user==null)
  }

  logout(){
    console.log("User logged out!")
    sessionStorage.removeItem('username')
  }
}
