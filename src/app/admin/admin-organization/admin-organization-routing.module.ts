import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTraitsComponent } from './admin-traits/admin-traits.component';



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
      }    
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOrganizationRoutingModule {}
