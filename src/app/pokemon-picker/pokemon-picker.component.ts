import { Component, OnInit } from '@angular/core';

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
  ];
  pokemon1?: any;
  pokemon2?: any;
  ngOnInit(): void {
  }

  pickPokemon1(index: number){
    this.pokemon1 = this.listPokemon[index];
  }

  pickPokemon2(index: number){
    this.pokemon2 = this.listPokemon[index];
  }
}
