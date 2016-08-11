import { provideRouter, RouterConfig } from '@angular/router';

import { dashboardRoutes } from './hero/dashboard/index';
import { heroRoutes } from './hero/index';

const routes:RouterConfig = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ...heroRoutes,
    ...dashboardRoutes
]

export const appRouterProviders = [
  provideRouter(routes)
];
