import { Component, OnInit, Input } from '@angular/core';
import { Move, MovePool } from '../../logic/move';
import { Some } from '../../monad/maybe';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
  id : number = 1;
  @Input() name : string = '';
  level : number = 1;
  hp : number = 20;
  maxHp : number = 20;
  attack : number = 20;
  defense : number = 20;
  speed : number = 20;
  moves : MovePool;

  constructor() { }

  ngOnInit(): void {
    this.moves = new MovePool(
      new Move("Nuzzle", 20, 0, 20, 100),
      new Some(new Move("Thunder Shock", 40, 0, 30, 100))
    )
  }

}
