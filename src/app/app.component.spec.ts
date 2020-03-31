import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PokemonPickerComponent} from "./pokemon-picker/pokemon-picker.component";
import {BattleComponent} from "./battle/battle.component";
import {PokemonComponent} from "./pokemon/pokemon.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PokemonPickerComponent,
        BattleComponent,
        PokemonComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
