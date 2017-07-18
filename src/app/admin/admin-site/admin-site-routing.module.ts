import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSiteTypeComponent } from './admin-site-type/admin-site-type.component';
import { AdminSiteComponent } from '../admin-site/admin-site.component';
import { AdminSiteNewComponent } from '../admin-site/admin-site-new/admin-site-new.component';
import { AdminSiteSingleComponent } from '../admin-site/admin-site-single/admin-site-single.component';
import { AdminSiteMultipleComponent } from '../admin-site/admin-site-multiple/admin-site-multiple.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Site'
    },
    children: [
      {
        path: '',
        component: AdminSiteTypeComponent,
        data: {
          title: ''
        }
      }, 
      {
        path: 'new',
        component: AdminSiteNewComponent,
        data: {
          title: 'new'
        }
      },
      {
        path: 'single',
        component: AdminSiteSingleComponent,
        data: {
          title: 'single'
        }
      },
      {
        path: 'multiple',
        component: AdminSiteMultipleComponent,
        data: {
          title: 'multiple'
        }
      }   
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSiteRoutingModule {}
