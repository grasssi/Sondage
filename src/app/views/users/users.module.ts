import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//DataTable
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataFilterPipe } from '../tables/datatable/datafilterpipe';

// Routing
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UsersPipesPipe } from './users-pipes.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    ListUsersComponent,
    DataFilterPipe,
    UsersPipesPipe

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DataTableModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }
