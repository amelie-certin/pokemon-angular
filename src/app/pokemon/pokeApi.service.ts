import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface StatApi{
  base_stat: number;
  stat: {name: string, url: string};
}

interface MoveApi{
  name: string;
  url: string;
}

interface PokemonApi{
  id: number;
  moves: MoveApi[];
  stats: StatApi[];
  species: {name: string};
}

export interface ResultBatch{
  results: {name: string, url: string}[];
}

@Injectable()
export class PokeApiService {
  constructor(private http: HttpClient) {
  }

  getPokemon(url: string): Observable<PokemonApi>{
    return this.http.get<PokemonApi>(url);
  }

  getPokemons(): Observable<ResultBatch>{
    return this.http.get<ResultBatch>(`https://pokeapi.co/api/v2/pokemon/?limit=20/`);
  }
}
