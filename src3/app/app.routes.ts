import { provideRouter, RouterConfig } from '@angular/router';

import { dashboardRoutes } from './dashboard';
import { heroRoutes } from './hero';

const routes:RouterConfig = [
	...dashboardRoutes,
	...heroRoutes
]

export const appRouterProviders = [
  provideRouter(routes)
];
