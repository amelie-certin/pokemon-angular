import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { PokemonSelectedGuard } from './pokemon-selected.guard';

const routes: Routes = [
  { path: 'battle', component: BattleComponent, canActivate: [PokemonSelectedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
