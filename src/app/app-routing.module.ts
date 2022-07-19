import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonAvailableOnGameCreateComponent } from './components/pokemon-available-on-game-create/pokemon-available-on-game-create.component';
import { PokemonAvailableOnGameComponent } from './components/pokemon-available-on-game/pokemon-available-on-game.component';
import { PokemonListCreateComponent } from './components/pokemon-list-create/pokemon-list-create.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRegisteredOnGameComponent } from './components/pokemon-registered-on-game/pokemon-registered-on-game.component';

const routes: Routes = [
  { path: 'pokemonList', component: PokemonListComponent },
  { path: 'pokemonListCreate', component: PokemonListCreateComponent },
  { path: 'availableOnGame', component: PokemonAvailableOnGameComponent },
  { path: 'availableOnGameCreate', component: PokemonAvailableOnGameCreateComponent },
  { path: 'registered', component: PokemonRegisteredOnGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
