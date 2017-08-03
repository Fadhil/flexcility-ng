import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminWorkOrderRoutingModule } from './admin-work-order-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminWorkOrderNewComponent } from './admin-work-order-new/admin-work-order-new.component';
import { AdminWorkOrderViewComponent } from './admin-work-order-view/admin-work-order-view.component';
import { AdminWorkOrderEditComponent } from './admin-work-order-edit/admin-work-order-edit.component';
import { AdminWorkOrderHomeComponent } from './admin-work-order-home/admin-work-order-home.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AdminWorkOrderRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminWorkOrderHomeComponent, AdminWorkOrderNewComponent, AdminWorkOrderViewComponent, AdminWorkOrderEditComponent]
})
export class AdminWorkOrderModule { }