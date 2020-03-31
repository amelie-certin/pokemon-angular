import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
  @Input() name : string = '';
  level : number = 1;
  hp : number = 20;
  maxHp : number = 20;

  constructor() { }

  ngOnInit(): void {
  }
}
