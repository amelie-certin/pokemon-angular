import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../logic/pokemon';
import { BattleService } from '../battle.service';
import { LogService } from './log.service';

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

  constructor(private battleService : BattleService, logService : LogService) {
    this.fighters = battleService.getFighters();
    this.logs = logService.getLogs();
    this.winnerLog = logService.getWinnerLog();
    this.battleService = battleService;
  }

  ngOnInit(): void {
  }

  toggleBattle() {
    this.running = !this.running;
    if (this.running) {
      this.action = 'Pause';
      this.battleService.run();
    } else {
      this.action = 'Play';
    }
  }
}
