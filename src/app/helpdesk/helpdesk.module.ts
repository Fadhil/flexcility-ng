import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HelpdeskDashboardComponent } from './helpdesk-dashboard/helpdesk-dashboard.component';
import {HelpdeskRoutingModule} from "./helpdesk-routing.module";
import { WorkRequestsComponent } from './work-requests/work-requests.component';

@NgModule({
  imports: [
    CommonModule,
    HelpdeskRoutingModule,
    ModalModule.forRoot(),
  ],
  declarations: [HelpdeskDashboardComponent, WorkRequestsComponent]
})
export class HelpdeskModule { }
