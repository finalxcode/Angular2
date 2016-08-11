import { RouterConfig }  from '@angular/router';

import { HeroListComponent, HeroDetailComponent } from './index';

export const heroRoutes: RouterConfig = [
  {
    path: 'hero',
    component: HeroListComponent,
    children: [
        {
            path: 'detail/:id',
            component: HeroDetailComponent
        },
        {
            path: '',
            component: HeroListComponent
        }
    ]
  }
];