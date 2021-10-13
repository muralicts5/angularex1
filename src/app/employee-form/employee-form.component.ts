import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/employee/Employee';
import { EmployeeService } from 'src/employeeService/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee:Employee | undefined;
  
  employeeForm = new FormGroup({
    firstName: new FormControl('',  [
      Validators.required,
      Validators.minLength(4)]),
    lastName: new FormControl(''),
    email: new FormControl(''),

  });

  constructor(private router:Router, private employeeService:EmployeeService) { }

save(){
  console.log('employeeForm')
   this.employee={
    first_name:this.employeeForm.value.firstName,
    last_name:this.employeeForm.value.lastName,
    email:this.employeeForm.value.email,
  }
  this.employeeService.addEmployees(this.employee).subscribe();
  this.router.navigate(["employees"]);
}

  ngOnInit(): void {
  }

}
