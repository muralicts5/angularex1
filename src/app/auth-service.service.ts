import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

   loggedIn:boolean=false 

  isUserLoggedIn(){
    return this.loggedIn;
  }

  logIn(){
    this.loggedIn=true;
  }

  logOut(){
    this.loggedIn=false;
  }

}
