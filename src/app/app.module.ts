import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleComponent } from './battle/battle.component';
import { BattleService } from './battle.service';
import { LogService } from './battle/log.service';
import { PokemonPickerComponent } from './pokemon-picker/pokemon-picker.component';
import { PokeApiService } from './pokemon/pokeApi.service';
import { PokemonSelectedGuard } from './pokemon-selected.guard'

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    PokemonPickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BattleService,
    LogService,
    PokeApiService,
    PokemonSelectedGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
