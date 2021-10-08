import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { UpdateOwnerComponent } from './components/update-owner/update-owner.component';
import { ListOwnersComponent } from './components/list-owners/list-owners.component';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataFilterPipe } from '../tables/datatable/datafilterpipe';


@NgModule({
  declarations: [
    OwnersComponent,
    AddOwnerComponent,
    UpdateOwnerComponent,
    ListOwnersComponent,
    DataFilterPipe
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class OwnersModule { }
