import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.scss']
})
export class employeecrudComponent 
{


  EmployeeArray : any[] = [];
  currentEmployeeID = "";

  name: string ="";
  group: string ="";
  email: string ="";
  attendence: string ="";
  password: string ="";
  
  constructor(private http: HttpClient ) 
  {
    this.getAllEmployee();
  }
  getAllEmployee() {

    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.EmployeeArray = resultData.data;
    });


  }

  setUpdate(data: any) 
  {
   this.name = data.name;
   this.group = data.group;
   this.email = data.email;
   this.password = data.password;
   this.attendence = data.attendence;

   this.currentEmployeeID = data._id;
  
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "group" : this.group,
      "email" : this.email,
      "password" : this.password,
      "attendence" : this.attendence,

    };
    
    this.http.patch("http://localhost:8000/user/update"+ "/"+this.currentEmployeeID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Updated")
        this.getAllEmployee();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deleted")
        this.getAllEmployee();
   
    });
    }
    
  save()
  {
    if(this.currentEmployeeID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }

register()
  {

    let bodyData = {
      "name" : this.name,
      "group" : this.group,
      "email" : this.email,
      "password" : this.password,
      "attendence" : this.attendence, 
  };
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        //this.getAllEmployee();
        this.name = '';
        this.group = '';
        this.email  = '';
        this.password  = '';
        this.attendence = '';
        
        this.getAllEmployee();
    });
  }
}