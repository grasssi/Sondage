import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing
import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { UpdateOwnerComponent } from './components/update-owner/update-owner.component';
import { ListOwnersComponent } from './components/list-owners/list-owners.component';
//Shared Module
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OwnersComponent,
    AddOwnerComponent,
    UpdateOwnerComponent,
    ListOwnersComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    OwnersRoutingModule

  ],
})
export class OwnersModule { }
