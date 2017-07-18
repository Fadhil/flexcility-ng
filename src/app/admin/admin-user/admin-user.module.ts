import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminUserNewComponent } from './admin-user-new/admin-user-new.component';
import { AdminUserHomeComponent } from './admin-user-home/admin-user-home.component';


@NgModule({
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminUserNewComponent, AdminUserHomeComponent]
})
export class AdminUserModule { }