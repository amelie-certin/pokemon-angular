import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  pokemon1 = {
    name: 'Eevee'
  }
  pokemon2 = {
    name: 'Pikachu'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
