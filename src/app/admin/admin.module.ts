import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminHomeComponent } from './admin-organization/admin-home/admin-home.component';
import { AdminRegisterComponent } from './admin-organization/admin-register/admin-register.component';
import { AdminSiteComponent } from './admin-organization/admin-site/admin-site.component';




@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminOrganizationComponent]
})
export class AdminModule { }