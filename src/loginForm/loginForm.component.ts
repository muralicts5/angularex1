import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from "src/app/auth-service.service";

@Component({
    selector:'login-form',
    templateUrl:'loginForm.component.html'
})
export class LoginForm{

    login:any={username:'',password:''};

    constructor(private router:Router, private authService:AuthServiceService){
      }

    save(loginForm:NgForm){
        console.log("inside the save method");
        console.log(this.login);
        console.log(loginForm.value);
        this.authService.logIn(this.login.username, this.login.password).subscribe((success:string)=>{
            console.log(success);
                    this.router.navigate(['/employees']);
        })
    }

}