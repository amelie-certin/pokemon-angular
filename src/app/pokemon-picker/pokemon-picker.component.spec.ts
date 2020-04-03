import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPickerComponent } from './pokemon-picker.component';
import {PokemonComponent} from "../pokemon/pokemon.component";

import {BattleService} from "../battle.service"
import { LogService } from '../battle/log.service';

describe('PokemonPickerComponent', () => {
  let component: PokemonPickerComponent;
  let fixture: ComponentFixture<PokemonPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonPickerComponent,
        PokemonComponent
      ],
      providers: [
        BattleService,
        LogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("first pokemon picked should be Bulbizarre (Bulbasaur)", () =>{
    const fixture = TestBed.createComponent(PokemonPickerComponent);
    const picker = fixture.componentInstance;
    picker.pickPokemon1(0);
    expect(picker.pokemon1.name).toBe("Bulbizarre (Bulbasaur)");
  })

  it("second pokemon picked should be Herbizarre (Ivysaur)", () =>{
    const fixture = TestBed.createComponent(PokemonPickerComponent);
    const picker = fixture.componentInstance;
    picker.pickPokemon2(1);
    expect(picker.pokemon2.name).toBe("Herbizarre (Ivysaur)");
  })
});
