import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService,
    private router : Router) { }

  employee : Employee = new Employee();
  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.employee);
    this.addEmployeeDetails();
  }
  addEmployeeDetails(){
    this.employeeService.addEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    });
    
  }

  goToEmployeeList(){
    this.router.navigate(["/employee"]);
  }

}
