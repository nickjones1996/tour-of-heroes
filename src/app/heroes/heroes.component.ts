import { Component, OnInit } from '@angular/core';
import { HEROES } from '../fake-heroes';
import { HeroDetailsComponent } from '../hero-details'
import { HeroComponent } from '../hero'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  resetHero: Hero;
  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero):void{
    if(JSON.stringify(hero) == JSON.stringify(this.selectedHero))
    {
      this.selectedHero = this.resetHero;
    }
    else
    {
      this.selectedHero = hero;
    }
  }
  getHeroes(): void {
      this.heroes = this.heroService.getHeroes();
  }
  getHeroesAsync(): void {
    this.heroService.getHeroesAsync().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroesAsync();
  }

}
