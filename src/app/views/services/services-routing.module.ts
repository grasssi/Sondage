import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { UpdateServicesComponent } from './components/update-services/update-services.component';

const routes: Routes = [
  {
    path: '', component: ServicesComponent
  },
  {
    path: 'addservice',
    component: AddServicesComponent
  },
  {
    path: 'update/:id',
    component: UpdateServicesComponent
  },
  {
    path: 'listservices',
    component: ListServicesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
