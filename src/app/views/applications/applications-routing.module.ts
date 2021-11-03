import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications.component';
import { AddApplicationComponent } from './components/add-application/add-application.component';
import { ListApplicationComponent } from './components/list-application/list-application.component';
import { UpdateApplicationComponent } from './components/update-application/update-application.component';

const routes: Routes = [
  {
     path: '',
   component: ApplicationsComponent
   },
   {
    path: 'addapplication',
  component: AddApplicationComponent
  },
  {
    path: 'listapplications',
  component: ListApplicationComponent
  },
  {
    path: 'updateapplication\:id',
  component: UpdateApplicationComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
