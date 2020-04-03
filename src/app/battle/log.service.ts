import { Injectable } from '@angular/core';
import { Pokemon } from '../../logic/pokemon';
import { Move } from '../../logic/move';

@Injectable()
export class LogService {
  private logs : string[] = [];
  private winner : Pokemon;

  constructor() {
  }

  push(attacker : Pokemon, defenser : Pokemon, move : Move, damage : number) {
    this.logs.push(`${attacker.name} deals ${damage} to ${defenser.name} using ${move.name}`);
  }

  getLogs() {
    return this.logs;
  }

  setWinner(winner : Pokemon) {
    this.winner = winner;
  }

  getWinnerLog() {
    return this.winner ? `Winner: ${this.winner.name}` : '';
  }
}
