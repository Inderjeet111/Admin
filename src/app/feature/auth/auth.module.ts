import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    SignupComponent,
    ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
