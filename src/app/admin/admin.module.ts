import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminOrganizationComponent, AdminHomeComponent]
})
export class AdminModule { }