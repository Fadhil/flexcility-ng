import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminWsCalendarComponent } from './admin-ws-calendar/admin-ws-calendar.component';
import { AdminWsListComponent } from './admin-ws-list/admin-ws-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'calendar',
        component: AdminWsCalendarComponent,
        data: {
          title: 'Calendar'
        }  
      },
      {
        path: 'list',
        component:AdminWsListComponent,
        data: {
          title:'List'
        }
      }
 
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWorkScheduleRoutingModule {}
