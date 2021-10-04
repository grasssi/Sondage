import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [

  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'adduser',
    component: AddUserComponent
  },
  {
    path: 'update/:id',
    component: UpdateUserComponent
  },
  {
    path: 'listusers',
    component: ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
