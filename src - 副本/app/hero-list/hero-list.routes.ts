import { RouterConfig }  from '@angular/router';

import { HeroListComponent } from './hero-list.component';

export const heroListRoutes: RouterConfig = [
  {
    path: 'hero',
    component: HeroListComponent
  }
];