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
  fighters : Pokemon[];

  constructor(private battleService : BattleService) {
    this.battleService = battleService;
  }

  setFighters() {
    this.fighters = this.battleService.getFighters();
  }
}
