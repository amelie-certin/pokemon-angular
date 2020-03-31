import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
  id = 1;
  @Input('name') name = "";
  level = 1;
  hp = 20;
  maxHp = 20;
  attack = 20;
  defense = 20;
  speed = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
