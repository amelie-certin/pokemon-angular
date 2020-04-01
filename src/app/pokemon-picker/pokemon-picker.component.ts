import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon, PokemonBuilder} from 'src/logic/pokemon';
import {Move, MovePool} from '../../logic/move';

const moves: MovePool = new MovePool(new Move('claw', 100, 0, 1, 100));

const pokemons: Pokemon[] = [
  new PokemonBuilder(1, 'Bulbizarre (Bulbasaur)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/001.png?v3.4.0')
    .setSpeed(45).setAttack(49).setDefense(49).setAttackSFX(65).setDefenseSFX(65).setMaxHp(45).setHp(45).build(),
  new PokemonBuilder(2, 'Herbizarre (Ivysaur)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/002.png?v3.4.0')
    .setSpeed(60).setAttack(62).setDefense(63).setAttackSFX(80).setDefenseSFX(80).setMaxHp(60).setHp(60).build(),
  new PokemonBuilder(3, 'Florizarre (Venusaur)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/003.png?v3.4.0')
    .setSpeed(80).setAttack(82).setDefense(83).setAttackSFX(100).setDefenseSFX(100).setMaxHp(80).setHp(80).build(),
  new PokemonBuilder(4, 'Salamèche (Charmander)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/004.png?v3.4.0')
    .setSpeed(65).setAttack(52).setDefense(43).setAttackSFX(60).setDefenseSFX(50).setMaxHp(39).setHp(39).build(),
  new PokemonBuilder(5, 'Reptincel (Charmeleon)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/005.png?v3.4.0')
    .setSpeed(80).setAttack(64).setDefense(58).setAttackSFX(80).setDefenseSFX(65).setMaxHp(58).setHp(58).build(),
  new PokemonBuilder(6, 'Dracaufeu (Charizard)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/006.png?v3.4.0')
    .setSpeed(100).setAttack(84).setDefense(78).setAttackSFX(109).setDefenseSFX(85).setMaxHp(78).setHp(78).build(),
  new PokemonBuilder(7, 'Carapuce (Squirtle)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/007.png?v3.4.0')
    .setSpeed(43).setAttack(48).setDefense(65).setAttackSFX(50).setDefenseSFX(64).setMaxHp(44).setHp(44).build(),
  new PokemonBuilder(8, 'Carabaffe (Wartortle)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/008.png?v3.4.0')
    .setSpeed(58).setAttack(63).setDefense(80).setAttackSFX(65).setDefenseSFX(80).setMaxHp(59).setHp(59).build(),
  new PokemonBuilder(9, 'Tortank (Blastoise)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/009.png?v3.4.0')
    .setSpeed(78).setAttack(83).setDefense(100).setAttackSFX(85).setDefenseSFX(105).setMaxHp(79).setHp(79).build(),
  new PokemonBuilder(10, 'Chenipan (Caterpie)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/010.png?v3.4.0')
    .setSpeed(45).setAttack(30).setDefense(35).setAttackSFX(20).setDefenseSFX(20).setMaxHp(45).setHp(45).build(),
  new PokemonBuilder(11, 'Chrysacier (Metapod)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/011.png?v3.4.0')
    .setSpeed(30).setAttack(20).setDefense(55).setAttackSFX(25).setDefenseSFX(25).setMaxHp(50).setHp(50).build(),
  new PokemonBuilder(12, 'Papilusion (Butterfree)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/012.png?v3.4.0')
    .setSpeed(70).setAttack(45).setDefense(50).setAttackSFX(90).setDefenseSFX(80).setMaxHp(60).setHp(60).build(),
  new PokemonBuilder(13, 'Roucoups (Pidgeotto)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/017.png?v3.4.0')
    .setSpeed(71).setAttack(60).setDefense(55).setAttackSFX(50).setDefenseSFX(50).setMaxHp(63).setHp(63).build(),
  new PokemonBuilder(14, 'Roucarnage (Pidgeot)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/018.png?v3.4.0')
    .setSpeed(101).setAttack(80).setDefense(75).setAttackSFX(70).setDefenseSFX(70).setMaxHp(83).setHp(83).build(),
  new PokemonBuilder(15, 'Pikachu (Pikachu)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/025.png?v3.4.0')
    .setSpeed(90).setAttack(55).setDefense(40).setAttackSFX(50).setDefenseSFX(50).setMaxHp(35).setHp(35).build(),
  new PokemonBuilder(16, 'Raichu (Raichu)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/026.png?v3.4.0')
    .setSpeed(110).setAttack(90).setDefense(55).setAttackSFX(90).setDefenseSFX(80).setMaxHp(60).setHp(60).build(),
  new PokemonBuilder(17, 'Mélofée (Clefairy)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/035.png?v3.4.0')
    .setSpeed(35).setAttack(45).setDefense(48).setAttackSFX(60).setDefenseSFX(65).setMaxHp(70).setHp(70).build(),
  new PokemonBuilder(18, 'Mélodelfe (Clefable)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/036.png?v3.4.0')
    .setSpeed(60).setAttack(70).setDefense(73).setAttackSFX(95).setDefenseSFX(90).setMaxHp(95).setHp(95).build(),
  new PokemonBuilder(19, 'Goupix (Vulpix)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/037.png?v3.4.0')
    .setSpeed(65).setAttack(41).setDefense(40).setAttackSFX(50).setDefenseSFX(65).setMaxHp(38).setHp(38).build(),
  new PokemonBuilder(20, 'Feunard (Ninetales)', moves, 'https://www.poketools.fr/bundles/ptpoketools/images/pokemon/pokemon-sugimori-h100/038.png?v3.4.0')
    .setSpeed(100).setAttack(76).setDefense(75).setAttackSFX(81).setDefenseSFX(100).setMaxHp(73).setHp(73).build(),
];

@Component({
  selector: 'app-pokemon-picker',
  templateUrl: './pokemon-picker.component.html',
  styleUrls: ['./pokemon-picker.component.scss']
})
export class PokemonPickerComponent implements OnInit {
  listPokemon = pokemons;
  pokemon1?: Pokemon;
  pokemon2?: Pokemon;
  @Output() setFighters = new EventEmitter();

  ngOnInit(): void {
  }

  pickPokemon1(index: number){
    this.pokemon1 = this.listPokemon[index].clone();
    console.log(this.pokemon1, this.pokemon2);
  }

  pickPokemon2(index: number){
    this.pokemon2 = this.listPokemon[index].clone();
    console.log(this.pokemon1, this.pokemon2);
  }

  chooseLevel1(event: any){
    this.pokemon1.setLevel(parseInt(event.target.value, 10));
  }
  chooseLevel2(event: any){
    this.pokemon2.setLevel(parseInt(event.target.value, 10));
  }

  startFight(){
    this.setFighters.emit([this.pokemon1, this.pokemon2]);
    this.pokemon1 = undefined;
    this.pokemon2 = undefined;
  }
}
