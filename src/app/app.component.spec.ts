import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PokemonPickerComponent} from "./pokemon-picker/pokemon-picker.component";
import {BattleComponent} from "./battle/battle.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PokemonPickerComponent,
        // BattleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pokemon');
  });


});
