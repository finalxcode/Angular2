import { RouterConfig } from '@angular/router';

import { HeroDetailComponent, HeroListComponent} from './shared';

export const heroRoutes:RouterConfig = [
    {path: 'hero', component: HeroListComponent},
    {path: 'detail/:id', component: HeroDetailComponent}
]