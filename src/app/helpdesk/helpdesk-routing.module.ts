import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpdeskDashboardComponent } from './helpdesk-dashboard/helpdesk-dashboard.component';
import { WorkRequestsComponent } from './work-requests/work-requests.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Helpdesk Pages'
    },
    children: [
      {
        path: 'dashboard',
        component: HelpdeskDashboardComponent,
        data: {
          title: 'Helpdesk Dashboard'
        }
      },
      {
        path: 'work-requests',
        component: WorkRequestsComponent,
        data: {
          title: 'Helpdesk New Work Requests'
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
