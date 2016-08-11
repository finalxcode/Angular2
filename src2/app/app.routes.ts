import { provideRouter, RouterConfig }  from '@angular/router';

import { dashboardRoutes } from './dashboard/dashboard.routes';
import { heroRoutes } from './hero/hero.routes';

const routes: RouterConfig = [
  ...dashboardRoutes,
  ...heroRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
