import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersListComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManageUsersRoutingModule
  ]
})
export class ManageUsersModule { }
