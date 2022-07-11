import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonAvailableOnGameComponent } from './components/pokemon-available-on-game/pokemon-available-on-game.component';
import { PokemonRegisteredOnGameComponent } from './components/pokemon-registered-on-game/pokemon-registered-on-game.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDataComponent } from './components/shared/pokeapi/pokemon-data/pokemon-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonAvailableOnGameComponent,
    PokemonRegisteredOnGameComponent,
    PokemonDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
