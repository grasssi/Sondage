import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SondagesRoutingModule } from './sondages-routing.module';
import { SondagesComponent } from './sondages.component';
import { AddSondageComponent } from './components/add-sondage/add-sondage.component';
import { ListSondageComponent } from './components/list-sondage/list-sondage.component';
//Shared Module
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SondagesComponent,
    AddSondageComponent,
    ListSondageComponent
  ],
  imports: [
    CommonModule,
    SondagesRoutingModule,
    SharedModule,
  
  ]
})
export class SondagesModule { }
