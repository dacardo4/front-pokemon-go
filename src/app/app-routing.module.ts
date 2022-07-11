import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonAvailableOnGameComponent } from './components/pokemon-available-on-game/pokemon-available-on-game.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRegisteredOnGameComponent } from './components/pokemon-registered-on-game/pokemon-registered-on-game.component';

const routes: Routes = [
  { path: 'pokemonList', component: PokemonListComponent },
  { path: 'availableOnGame', component: PokemonAvailableOnGameComponent },
  { path: 'registered', component: PokemonRegisteredOnGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
