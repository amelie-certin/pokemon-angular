import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  pokemons = [
    {name: 'Eevee', level: 5, hp: 20, maxHp: 20, attack: 20, defense: 20, speed: 20, moves: [{name: 'Nuzzle', power: 20}]},
    {name: 'Pikachu', level: 5, hp: 20, maxHp: 20, attack: 20, defense: 20, speed: 20, moves: [{name: 'Thunder Shock', power: 40}]}
  ]
  action = 'Play'
  logs : string[] = [];
  winnerLog : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleBattle() {
    this.action = this.action === 'Play' ? 'Pause' : 'Play';
    if (this.action === 'Pause') {
      this.run();
    }
  }

  run() {
    let [attacker, defenser] = this.attackOrder();
    do {
      const move = this.pokemons[attacker].moves[0];
      this.runTurn(attacker, defenser, move);
      [attacker, defenser] = [defenser, attacker];
    } while (this.pokemons[0].hp > 0 && this.pokemons[1].hp > 0);
    this.winnerLog = `Winner: ${this.pokemons[defenser].name}`;
    return this.pokemons[defenser];
  }

  runTurn(attacker, defenser, move) {
    const damage = this.damage(this.pokemons[attacker], this.pokemons[attacker].moves[0], this.pokemons[defenser].defense);
    this.pokemons[defenser].hp -= damage;
    this.logs.push(`${this.pokemons[attacker].name} deals ${damage} to ${this.pokemons[defenser].name}`);
  }

  attackOrder() {
    return this.pokemons[0].speed > this.pokemons[1].speed ? [0, 1] : [1, 0];
  }

  damage(pokemon, move, opponentDefense) {
    return Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * pokemon.attack * move.power / opponentDefense) / 50) + 2;
  }
}
