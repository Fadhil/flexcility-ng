import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TechnicianRoutingModule} from "./technician-routing.module";

@NgModule({
  imports: [
    CommonModule,
    TechnicianRoutingModule,
    ModalModule.forRoot()

  ],
  declarations: [DashboardComponent]
})
export class TechnicianModule { }
