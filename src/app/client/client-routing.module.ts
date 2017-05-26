import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientServiceRequisitionComponent } from './client-service-requisition/client-service-requisition.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Client Pages'
    },
    children: [
      {
        path: 'service-requisition',
        component: ClientServiceRequisitionComponent,
        data: {
          title: 'Client Service Requisition'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
