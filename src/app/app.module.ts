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
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { PokemonAvailableOnGameCreateComponent } from './components/pokemon-available-on-game-create/pokemon-available-on-game-create.component';
import { PokemonAvailableComponent } from './components/shared/cards/pokemon-available/pokemon-available.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonAvailableOnGameComponent,
    PokemonRegisteredOnGameComponent,
    PokemonDataComponent,
    PokemonListCreateComponent,
    PokemonAvailableOnGameCreateComponent,
    PokemonAvailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
