import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] | any;
  employee: Employee | any;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  private getEmployeeDetails() {
    this.employeeService.getEmployeeList().subscribe((empList) => {
      this.employeeList = empList;
    });
  }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  goToUpdateEmployee(empId: number) {
    this.router.navigate(['update-employee', empId]);
  }

  deleteEmployeeDetails(empId : number){
    this.employeeService.deleteEmployeeDetails(empId).subscribe(data => {
      alert("Employee Deleted Succefully !");
      this.getEmployeeDetails();
    })
  }

  viewEmployeeDetails(id : number){
    this.router.navigate(['employee-details',id]);
  }

}
