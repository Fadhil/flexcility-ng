import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRequestComponent } from './work-request.component';
import { WorkRequestRoutingModule } from './work-request-routing.module';

@NgModule({
  imports: [
    WorkRequestRoutingModule
  ],
  declarations: [WorkRequestComponent]
})
export class WorkRequestModule { }
