import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DndModule} from 'ng2-dnd';
import { AdminRoutingModule } from './admin-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminAssetComponent } from './admin-asset/admin-asset.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    AdminRoutingModule,
    DndModule.forRoot(),
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminOrganizationComponent, AdminSiteComponent, AdminAssetComponent, AdminUserComponent, AdminTeamComponent ]
})
export class AdminModule { }