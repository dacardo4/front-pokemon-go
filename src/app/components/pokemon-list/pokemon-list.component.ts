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

  indexAPI: number = 0;
  constructor(
    private _apollo: Apollo,
    private _pokemonService: PokemonService,
    
  ) { }

  pokemonList: pokemonInList[] = [];
  pokemonListAPI: allPokemonInApi[] = [];
  pokemonSelected: allPokemonInApi = new allPokemonInApi();

  ngOnInit(): void {
    //this.getPokemonByIDinAPI();
    this.getAllPokemonFromAPI();
    // let e = this;
    // const interval = setInterval(function() {
    //   e.indexAPI++;
    //   e.pokemonSelected = e.pokemonListAPI[e.indexAPI];
    // }, 1500);
  }

  getPokemonByIDinAPI(): void {
    this._pokemonService.getOnePokemonByID(1).pipe(take(1)).subscribe(
      data => {
        console.log(data);
        this.pokemonList = data;
      }, error => {
        console.log('getPokemonByIDinAPI Error: ',error);
      }
    );
  }
  getAllPokemonFromAPI(): void {
    this._pokemonService.getAllPokemonList().pipe(take(1)).subscribe(
      data => {
        console.log(data);
        this.pokemonListAPI = data.results;
        this.pokemonSelected = this.pokemonListAPI[this.indexAPI];
      }, error => {
        console.log('getAllPokemonFromAPI Error: ',error);
      }
    );
  }
  // getAllPokemonInDB(): void {
  //   this._apollo.query({
  //     query: QUERY_ALL_POKEMON_LIST,
  //   }).subscribe((result: any) => {
  //     console.log(result);
  //     this.pokemonList = result?.data?.pokemonList;
  //   });
  // }

  indexMinus(): void {
    console.log('enter',this.indexAPI);
    console.log('validator',this.indexAPI == 0);
    
    this.indexAPI = this.indexAPI == 0 ? 0 : (this.indexAPI-1);
    console.log('salida',this.indexAPI);
  }
  indexPlus(): void {
    this.indexAPI++;
    this.pokemonSelected = this.pokemonListAPI[this.indexAPI];
  }

}
