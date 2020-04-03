import { Component } from '@angular/core';
import { BattleService } from './battle.service';
import { Pokemon } from '../logic/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Pokemon';
  startFight = false;

  constructor(private battleService: BattleService) {
    this.battleService = battleService;
  }

  setFighters() {
    this.startFight = true;
  }
}
