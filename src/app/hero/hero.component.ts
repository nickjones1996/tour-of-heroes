import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  uid: number;
  name: string;
  rank: number;
  powers: [];
  constructor() { }

  ngOnInit() {
  }

}
