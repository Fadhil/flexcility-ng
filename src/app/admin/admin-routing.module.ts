import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin Pages'
    },
    children: [
      {
        path: 'organization',
        component: AdminOrganizationComponent,
        data: {
          title: 'Admin Organization'
        }
      },
      {
        path: 'home',
        component: AdminHomeComponent,
        data: {
          title: 'Admin Home'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
