import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Router } from '@angular/router';

export interface admin{
  username : string,
  password : string
}


@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  adminUsername : string = environment.adminUsername;
  adminPassword : string = environment.adminPassword;


  constructor(private http : HttpClient, private router : Router) { }

  //admin login

  adminLogin(username : string, password : string){

    if(username == this.adminUsername && password == this.adminPassword) {
      console.log('Login is successful');
      localStorage.setItem("token", (Math.random() + 1).toString(36).substring(7));
      this.router.navigate(['/employees']);
    }
    else {
      alert('The email or password you provided is invalid. Try again.');
      console.log('Login Failed');
      this.router.navigate(['/login']);
    }

  }

  // check if admin logged in or not
  isAdminLoggedIn() : Boolean{
    if(localStorage.getItem("token")){
      return true;
    }
    return false
  }


}
