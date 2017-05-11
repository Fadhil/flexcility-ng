import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRequestComponent } from './work-request.component';
import { WorkRequestRoutingModule } from './work-request-routing.module';
import { WorkRequestVerificationComponent } from './work-request-verification/work-request-verification.component';
import { WorkRequestIndexComponent } from './work-request-index/work-request-index.component';

@NgModule({
  imports: [
    WorkRequestRoutingModule
  ],
  declarations: [WorkRequestComponent, WorkRequestVerificationComponent, WorkRequestIndexComponent]
})
export class WorkRequestModule { }
