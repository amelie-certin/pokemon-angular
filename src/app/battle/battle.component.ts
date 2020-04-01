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
  running = false;
  runningActions = {true: 'Pause', false: 'Play'};
  logs : string[] = [];
  winnerLog : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleBattle() {
    this.running = !this.running;
    if (this.running) {
      this.run();
    }
  }

  delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  async run() {
    let [attacker, defenser] = this.attackOrder();
    do {
      const move = this.pokemons[attacker].moves[0];
      await this.runTurn(attacker, defenser, move);
      [attacker, defenser] = [defenser, attacker];
    } while (this.pokemons[0].hp > 0 && this.pokemons[1].hp > 0);
    this.winnerLog = `Winner: ${this.pokemons[defenser].name}`;
  }

  async runTurn(attacker, defenser, move) {
    const damage = this.damage(this.pokemons[attacker], this.pokemons[attacker].moves[0], this.pokemons[defenser].defense);
    this.pokemons[defenser].hp -= damage;
    this.logs.push(`${this.pokemons[attacker].name} deals ${damage} to ${this.pokemons[defenser].name}`);
    await this.delay();
  }

  attackOrder() {
    return this.pokemons[0].speed > this.pokemons[1].speed ? [0, 1] : [1, 0];
  }

  damage(pokemon, move, opponentDefense) {
    return Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * pokemon.attack * move.power / opponentDefense) / 50) + 2;
  }
}
