import { provideRouter, RouterConfig }  from '@angular/router';
import {dashboardRoutes} from './dashboard/dashboard.routes';
import {heroDetailRoutes} from './hero-detail';
import {heroListRoutes} from './hero-list';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/hero',
    pathMatch: 'full'
  },
  ...heroDetailRoutes,
  ...heroListRoutes,
  ...dashboardRoutes
];

export const appRouterProviders = [
  provideRouter(routes),
];

