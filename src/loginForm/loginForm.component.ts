import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:'login-form',
    templateUrl:'loginForm.component.html'
})
export class LoginForm{

    login:any={username:'',password:''};

    save(loginForm:NgForm){
        console.log("inside the save method");
        console.log(this.login);
        console.log(loginForm);

    }

}