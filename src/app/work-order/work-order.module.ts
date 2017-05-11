import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderComponent } from './work-order.component';
import {WorkOrderRoutingModule} from "./work-order-routing.module";
import { WorkOrderExecutionComponent } from './work-order-execution/work-order-execution.component';

@NgModule({
  imports: [
    WorkOrderRoutingModule
  ],
  declarations: [WorkOrderComponent, WorkOrderExecutionComponent]
})
export class WorkOrderModule { }
