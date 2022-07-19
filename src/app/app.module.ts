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
import { PokemonListCreateComponent } from './components/pokemon-list-create/pokemon-list-create.component';

import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { PokemonAvailableOnGameCreateComponent } from './components/pokemon-available-on-game-create/pokemon-available-on-game-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonAvailableOnGameComponent,
    PokemonRegisteredOnGameComponent,
    PokemonDataComponent,
    PokemonListCreateComponent,
    PokemonAvailableOnGameCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
