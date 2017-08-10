import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngWorkOrderHomeComponent } from './eng-work-order-home/eng-work-order-home.component';
import { EngDashboardComponent } from './eng-dashboard/eng-dashboard.component';
import { EngWorkOrderNewComponent } from './eng-work-order-new/eng-work-order-new.component';
import { EngWorkOrderViewComponent } from './eng-work-order-view/eng-work-order-view.component';
import { EngWorkOrderEditComponent } from './eng-work-order-edit/eng-work-order-edit.component';
import { EngWorkOrderCompletionComponent } from './eng-work-order-completion/eng-work-order-completion.component';
import { EngWorkOrderReportComponent } from './eng-work-order-report/eng-work-order-report.component';
import { EngWorkRequestHomeComponent } from './eng-work-request-home/eng-work-request-home.component';
import { EngWorkRequestNewComponent } from './eng-work-request-new/eng-work-request-new.component';
import { EngWorkRequestViewComponent } from './eng-work-request-view/eng-work-request-view.component';
import { EngWorkRequestEditComponent } from './eng-work-request-edit/eng-work-request-edit.component';
import { EngWorkRequestVerificationComponent } from './eng-work-request-verification/eng-work-request-verification.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [

      {
        path: 'dashboard',
        component:EngDashboardComponent,
        data: {
        title: 'Dashboard'
        }
      },
      {
        path: 'report',
        component: EngWorkOrderReportComponent,
        data: {
            title: 'Report'
          }
       },
       {
        path: 'workrequest',
        component: EngWorkRequestHomeComponent,
        data: {
        title: 'Work Request'
        },
        children: [
        {
          path: 'new',
          component: EngWorkRequestNewComponent,
          data: {
            title: 'New'
          }
        },
        {
          path: 'view',
          component: EngWorkRequestViewComponent,
          data: {
            title: 'View'
          }
        },
        {
          path: 'edit',
          component: EngWorkRequestEditComponent,
          data: {
            title: 'Edit'
          }
        },
        {
          path: 'verification',
          component: EngWorkRequestVerificationComponent,
          data: {
            title: 'Verification'
          }
        }
        ]
      },
      {
        path: 'workorder',
        component: EngWorkOrderHomeComponent,
        data: {
        title: 'Work Order'
        },
        children: [
        {
          path: 'new',
          component: EngWorkOrderNewComponent,
          data: {
            title: 'New'
          }
        },
        {
          path: 'view',
          component: EngWorkOrderViewComponent,
          data: {
            title: 'View'
          }
        },
        {
          path: 'edit',
          component: EngWorkOrderEditComponent,
          data: {
            title: 'Edit'
          }
        },
        {
          path: 'completion',
          component: EngWorkOrderCompletionComponent,
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
export class EngineerRoutingModule {}
