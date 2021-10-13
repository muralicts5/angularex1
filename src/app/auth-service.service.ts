import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedIn:boolean=false 

  constructor(private httpClient: HttpClient) { }

  isUserLoggedIn(){
    return this.loggedIn;
  }

  logIn(username:string, password:string):any{
    console.log("username"+username);
    console.log("password"+password);

    var formData: any = new FormData();
     formData.append("username", username);
    formData.append("password", password);

    return this.httpClient.post<{token:string}>('http://localhost:9090/authenticate', 
                    formData)
                    .pipe(map(res=>res.token),
                      tap(token => {
                            console.log("res");
                            console.log(token);
                            localStorage.setItem('access_token', token);
                            this.loggedIn=true;
                      }))
  }

  logOut(){
    localStorage.removeItem('access_token');
    this.loggedIn=false;
  }

}
