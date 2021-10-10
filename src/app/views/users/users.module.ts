import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UsersPipesPipe } from './users-pipes.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    ListUsersComponent,
    UsersPipesPipe

  ],
  imports: [
    SharedModule,
    CommonModule,
    UsersRoutingModule

  ]
})
export class UsersModule { }
