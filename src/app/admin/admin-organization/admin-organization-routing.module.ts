import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTraitsComponent } from './admin-traits/admin-traits.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminViewComponent } from './admin-view/admin-view.component';


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
        path: 'traits',
        component: AdminTraitsComponent,
        data: {
          title: 'Traits'
        }
      },
      {
        path: 'list',
        component: AdminListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'view',
        component: AdminViewComponent,
        data: {
          title: 'view'
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
