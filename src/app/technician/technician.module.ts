import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TechnicianRoutingModule} from "./technician-routing.module";
import { WorkOrderExecutionComponent } from './work-order-execution/work-order-execution.component';
import { WorkOrderReportComponent } from './work-order-report/work-order-report.component';

@NgModule({
  imports: [
    CommonModule,
    TechnicianRoutingModule,
    ModalModule.forRoot()

  ],
  declarations: [DashboardComponent, WorkOrderExecutionComponent, WorkOrderReportComponent]
})
export class TechnicianModule { }
