import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/service/login/login.component';
import { employeecrudComponent } from './employeecrud/employeecrud.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'employees', component: employeecrudComponent}
  ,
  {
    path : '', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
