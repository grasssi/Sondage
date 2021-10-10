import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFilterPipe } from '../tables/datatable/datafilterpipe';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Shared Module
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    DataFilterPipe
  ],
    imports: [
    CommonModule,
    SharedRoutingModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  exports:[
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataFilterPipe
  ]
})
export class SharedModule { }
