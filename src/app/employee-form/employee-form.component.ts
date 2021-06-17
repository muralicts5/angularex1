import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm = new FormGroup({
    firstName: new FormControl('',  [
      Validators.required,
      Validators.minLength(4)]),
    lastName: new FormControl(''),
    age: new FormControl(0),

  });

  constructor(private router:Router) { }

save(){
  console.log('employeeForm')
  console.log(this.employeeForm);
  this.router.navigate(["employees"]);
}

  ngOnInit(): void {
  }



}
