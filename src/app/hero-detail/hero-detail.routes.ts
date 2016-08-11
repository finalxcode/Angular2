import { RouterConfig }  from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';

export const heroDetailRoutes: RouterConfig = [
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];