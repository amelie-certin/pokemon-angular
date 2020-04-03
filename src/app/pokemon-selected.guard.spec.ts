import { TestBed } from '@angular/core/testing';

import { PokemonSelectedGuard } from './pokemon-selected.guard';

describe('PokemonSelectedGuard', () => {
  let guard: PokemonSelectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PokemonSelectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
