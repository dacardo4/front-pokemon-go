import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pokemonAvailableOnGame, QUERY_ALL_DATA } from './pokemon-available-on-game.types';

@Component({
  selector: 'app-pokemon-available-on-game',
  templateUrl: './pokemon-available-on-game.component.html',
  styleUrls: ['./pokemon-available-on-game.component.css']
})
export class PokemonAvailableOnGameComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  pokemonList: pokemonAvailableOnGame[] = [];
  constructor(
    private _apollo: Apollo,
  ) {
    this.getAllData();
  }

  ngOnInit(): void {
  }

  zeroFilled(index: number): string {
    let url = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${('000' + index).substr(-3)}_00.png`;
    return url;
  }

  getAllData(): void {
    this._apollo.query({
      query: QUERY_ALL_DATA,
    }).subscribe((result: any) => {
      console.log(result);
      this.pokemonList = result?.data?.pokemonAvailableOnGame;
    });
  }

}
