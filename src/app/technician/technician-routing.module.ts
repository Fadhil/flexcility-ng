import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkOrderExecutionComponent } from './work-order-execution/work-order-execution.component';
import { WorkOrderReportComponent } from './work-order-report/work-order-report.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Technician Pages'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Technician Home'
        }
      },
      {
        path: 'work-order-execution',
        component: WorkOrderExecutionComponent,
        data: {
          title: 'Technician Home'
        }
      },
      {
        path: 'work-order-report',
        component: WorkOrderReportComponent,
        data: {
          title: 'Technician Home'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule {}
