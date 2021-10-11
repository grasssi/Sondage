import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//routing
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { UpdateServicesComponent } from './components/update-services/update-services.component';
import { SharedModule } from '../shared/shared.module';
//

@NgModule({
  declarations: [
    ServicesComponent,
    ListServicesComponent,
    AddServicesComponent,
    UpdateServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
