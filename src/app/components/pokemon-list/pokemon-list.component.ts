import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PokemonService } from 'src/app/services/pokeapi/pokemon.service';
import { pokemonInList, QUERY_ALL_POKEMON_LIST } from './pokemon-list.querys';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private _apollo: Apollo,
    private _pokemonService: PokemonService,
    
  ) { }

  pokemonList: pokemonInList[] = [];

  ngOnInit(): void {
    // this._apollo.query({
    //   query: QUERY_ALL_POKEMON_LIST,
    // }).subscribe((result: any) => {
    //   console.log(result);
    //   this.pokemonList = result?.data?.pokemonList;
    // });
    this.getPokemonByID();
  }

  getPokemonByID(): void {
    this._pokemonService.getOnePokemonByID(1).pipe(take(1)).subscribe(
      data => {
        console.log(data);
        //this.allCantidades = data;
      }, error => {
        console.log('getProductos Error: ',error);
      }
    );
  }

}
