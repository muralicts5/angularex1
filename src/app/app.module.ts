import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {EmployeeList} from './../employeeList/employeeList.component'
import {EmployeeDetails} from './../employeeDetails/employeeDetails.component';
import {LoginForm} from './../loginForm/loginForm.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
import { MatButtonModule } from '@angular/material/button'  
import { MatMenuModule } from '@angular/material/menu'  
import { HttpClientModule } from  '@angular/common/http';

import { RouterModule } from '@angular/router';
import { TestDemoComponent } from './test-demo/test-demo.component'  
import { AuthGuardGuard } from './auth-guard.guard';


@NgModule({
  declarations: [
    AppComponent,EmployeeList,EmployeeDetails,LoginForm, EmployeeFormComponent, TestDemoComponent
  ],
  imports: [
    BrowserModule,MatButtonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatTableModule,MatMenuModule, HttpClientModule,
    RouterModule.forRoot([
      {path:"employees", component:EmployeeList, canActivate:[AuthGuardGuard]},
      {path:"employees/:id", component:EmployeeDetails, canActivate:[AuthGuardGuard]},
      {path:"employeeForm", component:EmployeeFormComponent, canActivate:[AuthGuardGuard]},
      {path:"login", component:LoginForm},
      {path:"", component:LoginForm},
      {path:"**", component:LoginForm}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
