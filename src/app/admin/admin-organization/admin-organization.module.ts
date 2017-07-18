import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminOrganizationRoutingModule } from './admin-organization-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTraitsComponent } from './admin-traits/admin-traits.component';



@NgModule({
  imports: [
    CommonModule,
    AdminOrganizationRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminRegisterComponent, AdminHomeComponent, AdminTraitsComponent]
})
export class AdminOrganizationModule { }