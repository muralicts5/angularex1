import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {EmployeeList} from './../employeeList/employeeList.component'
import {EmployeeDetails} from './../employeeDetails/employeeDetails.component';
import {LoginForm} from './../loginForm/loginForm.component';


@NgModule({
  declarations: [
    AppComponent,EmployeeList,EmployeeDetails,LoginForm
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
