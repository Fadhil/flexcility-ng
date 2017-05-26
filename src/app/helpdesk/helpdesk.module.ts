import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskDashboardComponent } from './helpdesk-dashboard/helpdesk-dashboard.component';
import {HelpdeskRoutingModule} from "./helpdesk-routing.module";
import { NewWorkRequestsComponent } from './new-work-requests/new-work-requests.component';

@NgModule({
  imports: [
    CommonModule,
    HelpdeskRoutingModule
  ],
  declarations: [HelpdeskDashboardComponent, NewWorkRequestsComponent]
})
export class HelpdeskModule { }
