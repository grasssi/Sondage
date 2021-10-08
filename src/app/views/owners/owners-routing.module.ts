import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersComponent } from './owners.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { UpdateOwnerComponent } from './components/update-owner/update-owner.component';

const routes: Routes = [
  {
    path: '', component: OwnersComponent
  },
  {
    path: 'addowner',
    component: AddOwnerComponent
  },
  {
    path: 'update/:id',
    component: UpdateOwnerComponent
  },
  {
    path: 'listowners',
    component: UpdateOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
