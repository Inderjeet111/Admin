import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/admin/signup/signup.component';
import { ResetpasswordComponent } from './components/admin/resetpassword/resetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './components/admin/forgotpassword/forgotpassword.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';


@NgModule({
  declarations: [
    SignupComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
