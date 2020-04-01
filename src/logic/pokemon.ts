import {MovePool} from "./move";
import {Stat, Stats} from './stats';

export class Pokemon {
  SPEED = "speed"
  ATTACK = "attack"
  ATTACK_SFX = "attack_sfx"
  DEFENSE = "defense"
  DEFENSE_SFX = "defense_sfx"

  id: number
  name: string
  level: number
  thumbnail: string

  hp: number
  maxHp: number

  moves: MovePool

  private stats: Stats

  constructor(id: number, name: string, thumbnail: string, level: number, speed: Stat,
              attack: Stat, defense: Stat, attackSFX: Stat, defenseSFX: Stat, hp: number, maxHp: number,
              moves: MovePool) {
    this.id    = id
    this.name  = name
    this.level = level
    this.thumbnail = thumbnail
    this.stats = new Stats()
    this.stats.define(this.SPEED, speed)
    this.stats.define(this.ATTACK, attack)
    this.stats.define(this.ATTACK_SFX, attackSFX)
    this.stats.define(this.DEFENSE, defense)
    this.stats.define(this.DEFENSE_SFX, defenseSFX)

    this.hp     = hp
    this.maxHp = maxHp

    this.moves = moves
  }

  speed() {
    return this.stats.get(this.SPEED)
  }

  attack() {
    return this.stats.get(this.ATTACK)
  }

  defense() {
    return this.stats.get(this.DEFENSE)
  }

  attackSFX() {
    return this.stats.get(this.ATTACK)
  }

  defenseSFX() {
    return this.stats.get(this.DEFENSE)
  }

  setMoves(moves: MovePool){
    this.moves = moves
  }

  setLevel(level: number) {
    this.level = level
  }

  getThumbnail() {
    return this.thumbnail
  }

  getRandomMove() {
    return this.moves.moves[Math.floor(Math.random() * this.moves.moves.length)];
  }

  clone(): Pokemon{
    return new Pokemon(
      this.id,
      this.name,
      this.thumbnail,
      this.level,
      this.stats.get(this.SPEED),
      this.stats.get(this.ATTACK),
      this.stats.get(this.DEFENSE),
      this.stats.get(this.ATTACK_SFX),
      this.stats.get(this.DEFENSE_SFX),
      this.hp,
      this.maxHp,
      this.moves
    )
  }
}

export class PokemonBuilder {
  private name: string
  private id: number
  private thumbnail: string
  private level = 1

  private speed: Stat = new Stat(1)
  private attack: Stat = new Stat(1)
  private attackSfx: Stat = new Stat(1)
  private defense: Stat = new Stat(1)
  private defenseSfx: Stat = new Stat(1)

  private hp = 0
  private maxHp = 0

  private moves: MovePool

  constructor(id: number, name: string, moves: MovePool, thumbnail: string) {
    this.id    = id
    this.name  = name
    this.moves = moves
    this.thumbnail = thumbnail
  }


  build(): Pokemon {
    return new Pokemon(
      this.id,
      this.name,
      this.thumbnail,
      this.level,
      this.speed,
      this.attack,
      this.attackSfx,
      this.defense,
      this.defenseSfx,
      this.hp,
      this.maxHp,
      this.moves,
    )
  }

  setSpeed(value: number): PokemonBuilder {
    this.speed = new Stat(value)
    return this
  }

  setAttack(value: number): PokemonBuilder {
    this.attack = new Stat(value)
    return this
  }

  setAttackSFX(value: number): PokemonBuilder {
    this.attackSfx = new Stat(value)
    return this
  }

  setDefense(value: number): PokemonBuilder {
    if(value === 0) { return this; } // Exception
    this.defense = new Stat(value)
    return this
  }

  setDefenseSFX(value: number): PokemonBuilder {
    if(value === 0) { return this; } // Exception
    this.defenseSfx = new Stat(value)
    return this
  }

  setLevel(value: number): PokemonBuilder {
    this.level = value
    return this
  }

  setHp(value: number): PokemonBuilder {
    this.hp = value
    return this
  }

  setMaxHp(value: number): PokemonBuilder {
    this.maxHp = value
    return this
  }
}
