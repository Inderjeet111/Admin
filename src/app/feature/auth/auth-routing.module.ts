import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { ResetpasswordComponent } from './components/admin/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/admin/forgotpassword/forgotpassword.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    title: "Login"
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'resetpassword',
    component:ResetpasswordComponent
  },
  {path:'forgotpassword',
component:ForgotpasswordComponent},
{
  path:'user-login',
  component:UserLoginComponent
},
  {
    path: "",
    redirectTo: "user-login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
