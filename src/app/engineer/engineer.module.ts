import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DndModule} from 'ng2-dnd';
import { EngineerRoutingModule } from './engineer-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EngWorkOrderHomeComponent } from './eng-work-order-home/eng-work-order-home.component';
import { EngDashboardComponent } from './eng-dashboard/eng-dashboard.component';
import { EngWorkOrderViewComponent } from './eng-work-order-view/eng-work-order-view.component';
import { EngWorkOrderNewComponent } from './eng-work-order-new/eng-work-order-new.component';
import { EngWorkOrderEditComponent } from './eng-work-order-edit/eng-work-order-edit.component';
import { EngWorkRequestHomeComponent } from './eng-work-request-home/eng-work-request-home.component';
import { EngWorkRequestNewComponent } from './eng-work-request-new/eng-work-request-new.component';
import { EngWorkRequestViewComponent } from './eng-work-request-view/eng-work-request-view.component';
import { EngWorkRequestEditComponent } from './eng-work-request-edit/eng-work-request-edit.component';
import { EngWorkOrderCompletionComponent } from './eng-work-order-completion/eng-work-order-completion.component';
import { EngWorkOrderReportComponent } from './eng-work-order-report/eng-work-order-report.component';
import { EngWorkRequestVerificationComponent } from './eng-work-request-verification/eng-work-request-verification.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModalModule.forRoot(),
    AngularMultiSelectModule,
    EngineerRoutingModule,
    DndModule.forRoot(),
    ImageUploadModule.forRoot()
  ],

  declarations: [
  EngWorkOrderHomeComponent, 
  EngDashboardComponent, 
  EngWorkOrderViewComponent, 
  EngWorkOrderNewComponent, 
  EngWorkOrderEditComponent, 
  EngWorkRequestHomeComponent, 
  EngWorkRequestNewComponent, 
  EngWorkRequestViewComponent, 
  EngWorkRequestEditComponent, 
  EngWorkOrderCompletionComponent, 
  EngWorkOrderReportComponent, 
  EngWorkRequestVerificationComponent, 
  ]
})
export class EngineerModule { }