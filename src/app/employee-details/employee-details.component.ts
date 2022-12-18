import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private  employeeService : EmployeeService,
    private route : ActivatedRoute) { }

  id : number | any;
  employee : Employee = new Employee();
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.employeeService.findEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    })
  }

}
