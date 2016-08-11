import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {HeroService, Hero} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  sub: any;

  constructor(private router: Router, private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
  			console.log(params);
	      if (params['id'] !== undefined) {
		      let id = +params['id'];
		      this.navigated = true;
		      this.heroService.getHero(id).then(hero => this.hero = hero);
		    } else {
		      this.navigated = false;
		      this.hero = new Hero();
		    }
	    });
  }
  ngOnDestroy() {
  	this.sub.unsubscribe();
  }
  save() {
  	  console.log(10);
  	  console.log(this.hero);
	  this.heroService
	      .save(this.hero)
	      .then(hero => {
	      	console.log(11);
	        this.hero = hero; // saved hero, w/ id if new
	        this.goBack(hero);
	      })
	      .catch(error => this.error = error); // TODO: Display error message
	}

	goBack(savedHero: Hero = null) {
		this.close.emit(savedHero);
  		if (this.navigated) { window.history.back(); }
		console.log(savedHero);
		//this.router.navigate(['/hero']);
	}
}
