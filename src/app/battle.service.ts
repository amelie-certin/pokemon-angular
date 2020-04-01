import { Injectable } from '@angular/core';
import { Pokemon } from '../logic/pokemon';

@Injectable()
export class BattleService {
  private fighters: Pokemon[];
  
  constructor() {
  }

  setFighters(fighters : Pokemon[]) {
    this.fighters = fighters;
  }

  getFighters() {
    return this.fighters;
  }
}
