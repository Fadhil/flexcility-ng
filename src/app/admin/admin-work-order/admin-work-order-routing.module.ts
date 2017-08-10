
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminWorkOrderNewComponent } from './admin-work-order-new/admin-work-order-new.component';
import { AdminWorkOrderViewComponent } from './admin-work-order-view/admin-work-order-view.component';
import { AdminWorkOrderEditComponent } from './admin-work-order-edit/admin-work-order-edit.component';
import { AdminWorkOrderHomeComponent } from './admin-work-order-home/admin-work-order-home.component';
import { AdminWorkOrderCompletionComponent } from './admin-work-order-completion/admin-work-order-completion.component';
import { AdminWorkOrderReportComponent } from './admin-work-order-report/admin-work-order-report.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
          path: 'report',
          component: AdminWorkOrderReportComponent,
          data: {
             title: 'Report'}
      },
      {
        path: '',
        component: AdminWorkOrderHomeComponent,
        data: {
          title: 'Work Order'
        },
        children: [
          {
        path: 'new',
        component: AdminWorkOrderNewComponent,
        data: {
          title: 'New'
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
      },
            {
        path: 'completion',
        component: AdminWorkOrderCompletionComponent,
        data: {
          title: 'Completion'
        }
      }
      ]

      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWorkOrderRoutingModule {}
