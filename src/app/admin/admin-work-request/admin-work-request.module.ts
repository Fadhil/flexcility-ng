import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminWorkRequestRoutingModule } from './admin-work-request-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminWorkRequestHomeComponent } from './admin-work-request-home/admin-work-request-home.component';
import { AdminWorkRequestNewComponent } from './admin-work-request-new/admin-work-request-new.component';
import { AdminWorkRequestEditComponent } from './admin-work-request-edit/admin-work-request-edit.component';
import { AdminWorkRequestViewComponent } from './admin-work-request-view/admin-work-request-view.component';
import { AdminWorkRequestVerificationComponent } from './admin-work-request-verification/admin-work-request-verification.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AdminWorkRequestRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [ AdminWorkRequestHomeComponent, AdminWorkRequestNewComponent, AdminWorkRequestEditComponent, AdminWorkRequestViewComponent, AdminWorkRequestVerificationComponent]
})
export class AdminWorkRequestModule { }