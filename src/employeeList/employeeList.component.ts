import {Component, EventEmitter, Output, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core'
import { EmployeeService } from 'src/employeeService/employee.service';



@Component({
    selector:'employee-list',
    templateUrl:"employeeList.component.html"
})

// Life Cycle
//init
// onchanges
// destroy
// new EmployeeList()


export class EmployeeList implements OnInit, OnDestroy, OnChanges{
  employees: any = [];


  selectedEmployee:any;
  name:string="ramesh";
  @Output() employeeChange:EventEmitter<string>=new EventEmitter<string>();

  constructor(private employeeService:EmployeeService){
    this.employeeService=employeeService;
    console.log('inside the constructor');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside the ngOnChanges');
  }
  
  ngOnDestroy(): void {
    console.log('inside the ngOnDestroy');
  }

  ngOnInit(): void {
    this.employees=this.employeeService.getEmployeeList();
    console.log('inside the init')
  }

  test(id:number):void{
      const filteredEmployees=
      this.employees.filter((employee:any)=>employee.id==id)
      this.selectedEmployee=filteredEmployees[0];
        console.log(this.selectedEmployee)
        this.employeeChange.emit(this.selectedEmployee);
    }

  test123(){

  }  
}
