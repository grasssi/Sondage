import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterielComponent } from './components/add-materiel/add-materiel.component';
import { ListeMaterielComponent } from './components/liste-materiel/liste-materiel.component';
import { InformatiquesComponent } from './informatiques.component';

const routes: Routes = [
  {
    path: '',
    component: InformatiquesComponent
  },
  {
    path: 'listmateriels',
    component: ListeMaterielComponent
  },
  {
    path: 'addmateriel',
    component: AddMaterielComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformatiquesRoutingModule { }
