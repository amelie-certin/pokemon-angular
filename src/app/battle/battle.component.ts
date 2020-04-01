import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../logic/pokemon';
import { BattleService } from '../battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  fighters: Pokemon[];
  running = false;
  action = 'Play';
  logs: string[] = [];
  winnerLog = '';

  constructor(battleService : BattleService) {
    this.fighters = battleService.getFighters();
  }

  ngOnInit(): void {
  }

  toggleBattle() {
    this.running = !this.running;
    if (this.running) {
      this.action = 'Pause';
      this.run();
    } else {
      this.action = 'Play';
    }
  }

  delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  async run() {
    let [attacker, defenser] = this.attackOrder();
    do {
      const move = this.fighters[attacker].getRandomMove();
      await this.runTurn(attacker, defenser, move);
      [attacker, defenser] = [defenser, attacker];

    } while (this.fighters[0].hp > 0 && this.fighters[1].hp > 0);
    this.winnerLog = `Winner: ${this.fighters[defenser].name}`;
  }

  async runTurn(attacker, defenser, move) {
    const damage = this.damage(this.fighters[attacker], this.fighters[defenser], move);
    this.fighters[defenser].hp -= damage;
    this.logs.push(`${this.fighters[attacker].name} deals ${damage} to ${this.fighters[defenser].name} using ${move.name}`);
    await this.delay();
  }

  attackOrder() {
    return this.fighters[0].speed > this.fighters[1].speed ? [0, 1] : [1, 0];
  }

  damage(pokemon, opponent, move) {
    const level = pokemon.level;
    const attack = pokemon.attack().baseStat;
    const power = move.power;
    const defense = opponent.defense().baseStat;

    return Math.floor(Math.floor(Math.floor(2 * level / 5 + 2) * attack * power / defense) / 50) + 2;
  }
}
