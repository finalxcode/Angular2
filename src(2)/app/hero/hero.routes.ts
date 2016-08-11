import { RouterConfig } from '@angular/router';

import { HeroDetailComponent } from './hero-detail';
import { HeroListComponent } from './hero-list';

export const heroRoutes: RouterConfig = [
    {path: 'herolist', component: HeroListComponent},
    {path: 'herodetail/:id', component: HeroDetailComponent}
]