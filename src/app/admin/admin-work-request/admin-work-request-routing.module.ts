import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminWorkRequestHomeComponent } from './admin-work-request-home/admin-work-request-home.component';
import { AdminWorkRequestNewComponent } from './admin-work-request-new/admin-work-request-new.component';
import { AdminWorkRequestEditComponent } from './admin-work-request-edit/admin-work-request-edit.component';
import { AdminWorkRequestViewComponent } from './admin-work-request-view/admin-work-request-view.component';
import { AdminWorkRequestVerificationComponent } from './admin-work-request-verification/admin-work-request-verification.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Work request'
    },
    children: [
      {
        path: '',
        component: AdminWorkRequestHomeComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'new',
        component: AdminWorkRequestNewComponent,
        data: {
          title: 'new'
        }
      },
      {
        path: 'view',
        component: AdminWorkRequestViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'edit',
        component: AdminWorkRequestEditComponent,
        data: {
          title: 'Edit'
        }
      },
      {
        path: 'verification',
        component: AdminWorkRequestVerificationComponent,
        data: {
          title: 'Verfication'
        }
      }

     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWorkRequestRoutingModule {}
