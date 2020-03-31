import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPickerComponent } from './pokemon-picker.component';
import {AppComponent} from "../app.component";

describe('PokemonPickerComponent', () => {
  let component: PokemonPickerComponent;
  let fixture: ComponentFixture<PokemonPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonPickerComponent ]
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

  it("first pokemon picked should be pikachu", () =>{
    const fixture = TestBed.createComponent(PokemonPickerComponent);
    const picker = fixture.componentInstance;
    picker.pickPokemon1(0);
    expect(picker.pokemon1.name).toBe("Pikachu");
  })

  it("second pokemon picked should be Raichu", () =>{
    const fixture = TestBed.createComponent(PokemonPickerComponent);
    const picker = fixture.componentInstance;
    picker.pickPokemon2(2);
    picker.pickPokemon2(1);
    expect(picker.pokemon2.name).toBe("Raichu");
  })
});
