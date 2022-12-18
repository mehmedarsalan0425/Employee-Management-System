import { Observable } from 'rxjs';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  id : any;
  employee: Employee = new Employee();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.findEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }

  updateEmployeeDetails() {
    this.employeeService
      .updateEmployeeDetails(this.employee)
      .subscribe((data) => {
        this.goToEmployeeDetails();
      });
  }

  goToEmployeeDetails() {
    this.routes.navigate(['/employee']);
  }

  onSubmit() {
    console.log(this.employee);
    this.updateEmployeeDetails();
  }
}
