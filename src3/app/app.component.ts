import { Component , OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router'

import { HeroService } from './hero/shared/hero.service';
import './shared/rxjs-extensions';
@Component({
  moduleId: module.id,
  selector: 'app-root',
	  template: `
			<h1>{{title}}</h1>
			<nav>
				<a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
				<a [routerLink]="['/hero']" routerLinkActive="active">Heros</a>
			</nav>
			<router-outlet></router-outlet>
		`,
  styleUrls: ['app.component.css'],
  providers: [HeroService],
  directives: [ROUTER_DIRECTIVES],
})
export class AppComponent {
	title:string = 'Heroes';
}
