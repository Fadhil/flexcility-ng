import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminWorkOrderNewComponent } from './admin-work-order-new/admin-work-order-new.component';
import { AdminWorkOrderViewComponent } from './admin-work-order-view/admin-work-order-view.component';
import { AdminWorkOrderEditComponent } from './admin-work-order-edit/admin-work-order-edit.component';
import { AdminWorkOrderHomeComponent } from './admin-work-order-home/admin-work-order-home.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Work Order'
    },
    children: [
      {
        path: '',
        component: AdminWorkOrderHomeComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'new',
        component: AdminWorkOrderNewComponent,
        data: {
          title: 'new'
        }
      },
      {
        path: 'view',
        component: AdminWorkOrderViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'edit',
        component: AdminWorkOrderEditComponent,
        data: {
          title: 'Edit'
        }
      }

     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWorkOrderRoutingModule {}
