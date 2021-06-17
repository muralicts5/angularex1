import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeList } from "src/employeeList/employeeList.component";
import { EmployeeService } from "src/employeeService/employee.service";

@Component({
    selector:'employee-details',
    templateUrl:'employeeDetails.component.html'
})
export class EmployeeDetails implements OnInit{
    
    employee:any=null;
    id:Number=0;

    constructor(private route:ActivatedRoute, private employeeService:EmployeeService){
        this.id=Number(this.route.snapshot.paramMap.get("id"));
        console.log(this.id);
    }

    
    ngOnInit(): void {
        const employees:any=this.employeeService.getEmployeeList();
       const filteredEmployees=employees.filter((employee:any)=>employee.id==this.id)
        this.employee=filteredEmployees[0];
          console.log(this.employee)
      }

    }


   //@Input() 
       




