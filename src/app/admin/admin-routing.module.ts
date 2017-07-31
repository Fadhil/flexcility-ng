import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminHomeComponent } from './admin-organization/admin-home/admin-home.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminAssetComponent } from './admin-asset/admin-asset.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'organization',
        component: AdminOrganizationComponent,
        loadChildren: './admin-organization/admin-organization.module#AdminOrganizationModule'
      },
      {
        path: 'site',
        component: AdminSiteComponent,
        loadChildren: './admin-site/admin-site.module#AdminSiteModule'
      },
      {
        path: 'asset',
        component: AdminAssetComponent,
        loadChildren: './admin-asset/admin-asset.module#AdminAssetModule'
      },
      {
        path: 'user',
        component: AdminUserComponent,
        loadChildren: './admin-user/admin-user.module#AdminUserModule'
      },
      {
        path: 'team',
        component: AdminTeamComponent,
        loadChildren: './admin-team/admin-team.module#AdminTeamModule'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
