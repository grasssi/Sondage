import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { UpdateOwnerComponent } from './components/update-owner/update-owner.component';


@NgModule({
  declarations: [
    OwnersComponent,
    AddOwnerComponent,
    UpdateOwnerComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule
  ]
})
export class OwnersModule { }
