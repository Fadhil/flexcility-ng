import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'helpdesk-dashboard',
        loadChildren: './helpdesk-dashboard/helpdesk-dashboard.module#HelpdeskDashboardModule'
      },
      {
        path: 'service-requisition',
        loadChildren: './service-requisition/service-requisition.module#ServiceRequisitionModule'
      },
      {
        path: 'work-requests',
        loadChildren: './work-request/work-request.module#WorkRequestModule'
      },
      {
        path: 'work-orders',
        loadChildren: './work-order/work-order.module#WorkOrderModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'accounts',
    component: SimpleLayoutComponent,
    data: {
      title: 'Accounts'
    },
    children: [

      {
        path: '',
        loadChildren: './accounts/accounts.module#AccountsModule',
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [

      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
