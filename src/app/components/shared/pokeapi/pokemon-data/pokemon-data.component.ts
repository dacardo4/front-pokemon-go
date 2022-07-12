import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { allPokemonInApi } from 'src/app/components/pokemon-list/pokemon-list.querys';
import { MUTATION_CREATE_POKEMON_LIST } from './pokemon-data.querys';

@Component({
  selector: 'app-pokeapi-pokemonData',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.css']
})
export class PokemonDataComponent implements OnInit {

  // @Input() pokemon: allPokemonInApi = new allPokemonInApi();
  @Input() set dataPokemonReceived(pokemon: allPokemonInApi) {
    this.nombrePokemon = pokemon.name;
    this.idPokemon = pokemon.url.split('/')[6];
    //if(+this.idPokemon > 521 && +this.idPokemon <= 905) this.registerNewPokemonList();
  }

  nombrePokemon: string = '';
  idPokemon: string = '';

  constructor(
    private _apollo: Apollo,
  ) { }

  ngOnInit(): void { }

  registerNewPokemonList(): void {
    this._apollo.mutate({
      mutation: MUTATION_CREATE_POKEMON_LIST,
      variables: {
        idRegistro: this.idPokemon,
        nombre: this.nombrePokemon
      }
    }).subscribe((response:any) => {
      console.log('response registerNewPokemonList: ',response);
    }, error => {
      console.log('error registerNewPokemonList: ',error);
    });
  }
}
