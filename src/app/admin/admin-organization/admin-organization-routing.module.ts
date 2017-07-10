import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminOrganizationComponent } from './admin-organization.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Organization'
    },
    children: [
        {
        path: '',
        component: AdminHomeComponent,
        data: {
          title: ''
        }
      }, 
      {
        path: 'register',
        component: AdminRegisterComponent,
        data: {
          title: 'Register'
        }
      },           
      {
        path: 'site',
        component: AdminSiteComponent,
        data: {
          title: 'Site'
        }
      }     
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOrganizationRoutingModule {}
