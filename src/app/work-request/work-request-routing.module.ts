/**
 * Created by fadhil on 12/05/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import { WorkRequestComponent } from './work-request.component';

const routes: Routes = [
  {
    path: '',
    component: WorkRequestComponent,
    data: {
      title: 'Work Request'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRequestRoutingModule { }
