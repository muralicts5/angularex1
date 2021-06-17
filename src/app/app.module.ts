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

import { RouterModule } from '@angular/router';
import { TestDemoComponent } from './test-demo/test-demo.component'  


@NgModule({
  declarations: [
    AppComponent,EmployeeList,EmployeeDetails,LoginForm, EmployeeFormComponent, TestDemoComponent
  ],
  imports: [
    BrowserModule,MatButtonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatTableModule,MatMenuModule,
    RouterModule.forRoot([
      {path:"employees", component:EmployeeList},
      {path:"employees/:id", component:EmployeeDetails},
      {path:"employeeForm", component:EmployeeFormComponent},
      {path:"login", component:LoginForm},
      {path:"", component:LoginForm},
      {path:"**", component:LoginForm}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
