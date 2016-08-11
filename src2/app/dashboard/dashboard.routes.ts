import { RouterConfig }  from '@angular/router';

import { DashboardComponent } from './index';

export const dashboardRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];