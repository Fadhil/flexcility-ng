import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpdeskDashboardComponent } from './helpdesk-dashboard/helpdesk-dashboard.component';
import { HelpdeskWorkRequestHomeComponent } from './helpdesk-work-request-home/helpdesk-work-request-home.component';
import { HelpdeskWorkRequestViewComponent } from './helpdesk-work-request-view/helpdesk-work-request-view.component';
import { HelpdeskWorkRequestEditComponent } from './helpdesk-work-request-edit/helpdesk-work-request-edit.component';
import { HelpdeskWorkRequestNewComponent } from './helpdesk-work-request-new/helpdesk-work-request-new.component';
import { HelpdeskWorkRequestVerificationComponent } from './helpdesk-work-request-verification/helpdesk-work-request-verification.component';
import { HelpdeskWorkOrderHomeComponent } from './helpdesk-work-order-home/helpdesk-work-order-home.component';
import { HelpdeskWorkOrderEditComponent } from './helpdesk-work-order-edit/helpdesk-work-order-edit.component';
import { HelpdeskWorkOrderNewComponent } from './helpdesk-work-order-new/helpdesk-work-order-new.component';
import { HelpdeskWorkOrderViewComponent } from './helpdesk-work-order-view/helpdesk-work-order-view.component';
import { HelpdeskWorkOrderReportComponent } from './helpdesk-work-order-report/helpdesk-work-order-report.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        component: HelpdeskDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'workrequest',
        component: HelpdeskWorkRequestHomeComponent,
        data: {
          title: 'Work Request'
        },
        children:[
        {
          path: 'new',
          component: HelpdeskWorkRequestNewComponent,
          data: {
          title: 'New'
          }
        },
        {
          path: 'view',
          component: HelpdeskWorkRequestViewComponent,
          data: {
          title: 'View'
          }
        },
        {
          path: 'edit',
          component: HelpdeskWorkRequestEditComponent,
          data: {
          title: 'Edit'
          }
        },
        {
          path: 'verification',
          component: HelpdeskWorkRequestVerificationComponent,
          data: {
          title: 'Verification'
          }
        }

        ]
      },
      {
        path: 'workorder',
        component: HelpdeskWorkOrderHomeComponent,
        data: {
          title: 'Work Order'
        },
        children:[
        {
          path: 'new',
          component: HelpdeskWorkOrderNewComponent,
          data: {
          title: 'New'
          }
        },
        {
          path: 'view',
          component: HelpdeskWorkOrderViewComponent,
          data: {
          title: 'View'
          }
        },
        {
          path: 'edit',
          component: HelpdeskWorkOrderEditComponent,
          data: {
          title: 'Edit'
          }
        }
        ]
      },
      {
          path: 'report',
          component: HelpdeskWorkOrderReportComponent,
          data: {
          title: 'Report'
          }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule {}
/**
 * Created by fadhil on 27/05/2017.
 */
