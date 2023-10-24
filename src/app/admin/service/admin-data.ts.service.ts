import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from 'src/app/model/employees';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataTsService {

  dataUrl : string = 'http://localhost:3001';
  constructor(private http : HttpClient) { }

  addEmployee(employeeObj : Employees) : Observable<Employees>{
    return this.http.post<Employees>(this.dataUrl,employeeObj);
  }

  getAllEmployees() : Observable<Employees[]>{
    return this.http.get<Employees[]>(this.dataUrl)
  }
}
