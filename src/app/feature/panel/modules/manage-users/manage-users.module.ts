import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    UsersListComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManageUsersRoutingModule,ToastrModule.forRoot()

  ]
})
export class ManageUsersModule { }
