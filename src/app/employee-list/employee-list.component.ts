import { Component, OnInit } from '@angular/core';
import { EmployeeServise } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = [];
  constructor(private _employeeService : EmployeeServise) { }

  ngOnInit(){
    this._employeeService.getEmployees()
    .subscribe(data =>this.employees = data);

  }

}
