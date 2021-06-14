import { Component, Input } from "@angular/core";

@Component({
    selector:'employee-details',
    templateUrl:'employeeDetails.component.html'
})
export class EmployeeDetails{
   @Input() employee:any=null;
}