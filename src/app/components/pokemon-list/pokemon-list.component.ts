import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PokemonService } from 'src/app/services/pokeapi/pokemon.service';
import { allPokemonInApi, pokemonInList, QUERY_ALL_POKEMON_LIST } from './pokemon-list.querys';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  displayedColumns: string[] = ['rowNumber', 'IDDB', 'PokedexIndex', 'Nombre'];

  constructor(
    private _apollo: Apollo,
  ) { }

  pokemonList: pokemonInList[] = [];

  ngOnInit(): void {
    this.getAllPokemonInDB();
  }

  getAllPokemonInDB(): void {
    this._apollo.query({
      query: QUERY_ALL_POKEMON_LIST,
    }).subscribe((result: any) => {
      console.log(result);
      this.pokemonList = result?.data?.pokemonList;
    });
  }

}
