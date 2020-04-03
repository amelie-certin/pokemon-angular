import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BattleService } from './battle.service';

@Injectable()
export class PokemonSelectedGuard implements CanActivate {
  constructor(private battleService: BattleService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    if(this.battleService.getFighters().length == 2) return true;
    return this.router.parseUrl('/');
  }
}
