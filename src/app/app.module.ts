import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleComponent } from './battle/battle.component';
import { BattleService } from './battle.service';
import { LogService } from './battle/log.service';
import { PokemonPickerComponent } from './pokemon-picker/pokemon-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    PokemonPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BattleService,
    LogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
