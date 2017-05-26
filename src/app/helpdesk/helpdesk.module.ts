import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskDashboardComponent } from './helpdesk-dashboard/helpdesk-dashboard.component';
import {HelpdeskRoutingModule} from "./helpdesk-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HelpdeskRoutingModule
  ],
  declarations: [HelpdeskDashboardComponent]
})
export class HelpdeskModule { }
