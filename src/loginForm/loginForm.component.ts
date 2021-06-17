import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:'login-form',
    templateUrl:'loginForm.component.html'
})
export class LoginForm{

    login:any={username:'',password:''};

    constructor(private router:Router){

    }

    save(loginForm:NgForm){
        console.log("inside the save method");
        console.log(this.login);
        console.log(loginForm.value);
         this.router.navigate(['/employees']);


    }

}