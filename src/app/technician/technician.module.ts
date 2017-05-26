import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TechnicianRoutingModule} from "./technician-routing.module";

@NgModule({
  imports: [
    CommonModule,
    TechnicianRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class TechnicianModule { }
