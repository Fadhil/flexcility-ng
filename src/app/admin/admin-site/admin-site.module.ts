import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminSiteRoutingModule } from './admin-site-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminSiteTypeComponent } from './admin-site-type/admin-site-type.component';
import { AdminSiteNewComponent } from './admin-site-new/admin-site-new.component';
import { AdminSiteSingleComponent } from './admin-site-single/admin-site-single.component';
import { AdminSiteMultipleComponent } from './admin-site-multiple/admin-site-multiple.component';



@NgModule({
  imports: [
    CommonModule,
    AdminSiteRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminSiteTypeComponent, AdminSiteNewComponent, AdminSiteSingleComponent, AdminSiteMultipleComponent]
})
export class AdminSiteModule { }