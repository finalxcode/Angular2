import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero ,HeroService } from '../shared/index';
import {HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  error:any;
  selectedHero: Hero;
  addingHero = false;

  constructor(private router: Router, private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes).catch(error => this.error = error);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { 
    this.router.navigate(['/detail', hero.id]);
  }
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  addHero() {
    //addingHero用于在heroes.component模板中表示是否需要展示空白的添加英雄模板
    this.addingHero = true;
    this.selectedHero = null;
    console.log(9);
    console.log(this.addingHero);
  }
  close(savedHero: Hero) {
    console.log(8);
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }
  deleteHero(hero: Hero, event: any) {
    //停止事件的传播
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error);
  }
}
