import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pokemonInList, QUERY_ALL_POKEMON_LIST } from './pokemon-list.querys';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private _apollo: Apollo
  ) { }

  pokemonList: pokemonInList[] = [];

  ngOnInit(): void {
    this._apollo.query({
      query: QUERY_ALL_POKEMON_LIST,
    }).subscribe((result: any) => {
      console.log(result);
      this.pokemonList = result?.data?.pokemonList;
    });
  }

}
