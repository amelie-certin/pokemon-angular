import { Injectable } from '@angular/core';
import { Pokemon } from '../logic/pokemon';
import { Move } from '../logic/move';
import { LogService } from './battle/log.service';

@Injectable()
export class BattleService {
  private fighters: Pokemon[];
  private winner: string;

  constructor(private logService : LogService) {
    this.logService = logService;
  }

  setFighters(fighters : Pokemon[]) {
    this.fighters = fighters;
  }

  getFighters() {
    return this.fighters;
  }

  getWinner() {
    return this.winner;
  }

  async run() {
    let [attacker, defenser] = this.attackOrder();
    do {
      const move = this.fighters[attacker].getRandomMove();
      await this.runTurn(attacker, defenser, move);
      [attacker, defenser] = [defenser, attacker];

    } while (this.fighters[0].hp > 0 && this.fighters[1].hp > 0);
    this.logService.setWinner(this.fighters[1]);
  }

  private async runTurn(attacker : number, defenser : number, move : Move) {
    const damage = this.damage(this.fighters[attacker], this.fighters[defenser], move);
    this.fighters[defenser].hp -= damage;
    this.logService.push(this.fighters[attacker], this.fighters[defenser], move, damage);
    console.log('tick');

    await this.delay();
  }

  private delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }


  private attackOrder() {
    return this.fighters[0].speed > this.fighters[1].speed ? [0, 1] : [1, 0];
  }

  private damage(pokemon : Pokemon, opponent : Pokemon, move : Move) {
    const level = pokemon.level;
    const attack = pokemon.attack().baseStat;
    const power = move.power;
    const defense = opponent.defense().baseStat;

    return Math.floor(Math.floor(Math.floor(2 * level / 5 + 2) * attack * power / defense) / 50) + 2;
  }
}
