import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  private getUrl = "http://localhost:8080/getEmployeeDetails";
  private saveUrl = "http://localhost:8080/saveEmployeeDetails";
  private findByIdUrl = "http://localhost:8080/getEmployeeById";
  private updateUrl = "http://localhost:8080/updateEmployeeDetails";
  private deleteUrl = "http://localhost:8080/deleteEmployeeDetails";
  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.getUrl}`);
  }

  addEmployee(employee : Employee){
   return this.httpClient.post(this.saveUrl,employee);
  }

  findEmployeeById(id : number) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.findByIdUrl}/${id}`);
  }

  updateEmployeeDetails(employee : Employee){
    return this.httpClient.post(this.saveUrl,employee);
  }

  deleteEmployeeDetails(id : number){
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }


}
