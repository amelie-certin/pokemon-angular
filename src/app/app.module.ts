import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleComponent } from './battle/battle.component';
import { BattleService } from './battle.service';
import { LogService } from './battle/log.service';
import { PokemonPickerComponent } from './pokemon-picker/pokemon-picker.component';
import {HttpClientModule} from '@angular/common/http';
import {PokeApiService} from './pokemon/pokeApi.service';

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
    PokeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
