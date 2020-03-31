import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface Poke {
  name: string;
  thumbnail: string;
}

@Component({
  selector: 'app-pokemon-picker',
  templateUrl: './pokemon-picker.component.html',
  styleUrls: ['./pokemon-picker.component.scss']
})
export class PokemonPickerComponent implements OnInit {
  listPokemon = [
    {name: 'Pikachu', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/025.png?v3.4.0'},
    {name: 'Raichu', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/026.png?v3.4.0'},
    {name: 'Sablerau', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/027.png?v3.4.0'},
    {name: 'SablerauEvol1', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/028.png?v3.4.0'},
    {name: 'Pikachu', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/029.png?v3.4.0'},
    {name: 'Raichu', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/030.png?v3.4.0'},
    {name: 'Sablerau', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/031.png?v3.4.0'},
    {name: 'SablerauEvol1', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/032.png?v3.4.0'},
    {name: 'Raichu', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/033.png?v3.4.0'},
    {name: 'Sablerau', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/034.png?v3.4.0'},
    {name: 'SablerauEvol1', thumbnail: 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/035.png?v3.4.0'},
  ];
  pokemon1?: Poke;
  pokemon2?: Poke;
  @Output() setFighters = new EventEmitter();

  ngOnInit(): void {
  }

  pickPokemon1(index: number){
    this.pokemon1 = this.listPokemon[index];
  }

  pickPokemon2(index: number){
    this.pokemon2 = this.listPokemon[index];
  }

  startFight(){
    this.setFighters.emit({pokemon1: this.pokemon1, pokemon2: this.pokemon2});
  }
}