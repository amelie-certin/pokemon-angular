import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';
import { Pokemon } from 'src/logic/pokemon';
import { MovePool, Move } from 'src/logic/move';
import { Stat } from 'src/logic/stats';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LogService
      ],
    }).compileComponents();
  });

  it('should be created', () => {
    const service = TestBed.inject(LogService);
    expect(service).toBeTruthy();
  });

  it('logs pokemon attack', () => {
    const service = TestBed.inject(LogService);
    const fakeMovePool = new MovePool(new Move("claw", 55, 0, 0, 0))
    const pokemonAttacker = new Pokemon(0, "attacker", "", 1, new Stat(1), new Stat(1), new Stat(1), new Stat(1), new Stat(1), 1, 1, fakeMovePool)
    const pokemonDefenser = new Pokemon(0, "defenser", "", 1, new Stat(1), new Stat(1), new Stat(1), new Stat(1), new Stat(1), 1, 1, fakeMovePool)

    service.push(pokemonAttacker, pokemonDefenser, fakeMovePool.get(0), 10)

    expect(service.getLogs()).toEqual(["attacker deals 10 to defenser using claw"])
  })
});
