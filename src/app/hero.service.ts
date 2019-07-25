import { Injectable } from '@angular/core';
import { HeroComponent } from './hero';
import { HEROES } from './fake-heroes';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[]
  {
    return HEROES;
  }
  getHeroesAsync(): Observable<Hero> {
    return of(HEROES);
  }
  getHero(id: number): Obervable<Hero>
  {
     return of(HEROES.find(hero => hero.uid === id));
  }
}
