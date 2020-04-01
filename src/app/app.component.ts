import { Component } from '@angular/core';
import {Pokemon} from "../logic/pokemon";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon';
  fighters: Pokemon[]

  setFighters(fighters: Pokemon[]){
    this.fighters = fighters
  }
}
