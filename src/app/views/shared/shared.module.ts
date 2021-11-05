import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Shared Module
import { DataFilterPipe } from '../tables/datatable/datafilterpipe';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { SelectModule } from 'ng-select';
import { EmptyPipe } from '../../pipes/empty.pipe';


@NgModule({
  declarations: [
    DataFilterPipe,
    EmptyPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SelectModule,
    
    
  ],
  exports:[
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataFilterPipe,
    SelectModule,
    EmptyPipe
  ]
})
export class SharedModule { }
