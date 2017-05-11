import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRequisitionComponent } from './service-requisition.component';
import { ServiceRequisitionRoutingModule } from './service-requisition-routing.module';

@NgModule({
  imports: [
    ServiceRequisitionRoutingModule
  ],
  declarations: [ServiceRequisitionComponent]
})
export class ServiceRequisitionModule { }
