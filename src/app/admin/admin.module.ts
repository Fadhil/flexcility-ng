import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminAssetComponent } from './admin-asset/admin-asset.component';
import { AdminUserComponent } from './admin-user/admin-user.component';




@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminOrganizationComponent, AdminSiteComponent, AdminAssetComponent, AdminUserComponent]
})
export class AdminModule { }