import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserNewComponent } from './admin-user-new/admin-user-new.component';
import { AdminUserHomeComponent } from './admin-user-home/admin-user-home.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'user'
    },
    children: [
      {
        path: '',
        component: AdminUserHomeComponent,
        data: {
          title: ''
        }
      },
            {
        path: 'new',
        component: AdminUserNewComponent,
        data: {
          title: 'new'
        }
      }

     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserRoutingModule {}
