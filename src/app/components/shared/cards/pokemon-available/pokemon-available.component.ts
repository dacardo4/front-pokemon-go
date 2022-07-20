import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MUTATION_UPDATE_AVAILABLE_BY_ID, pokemonAvailableOnGame } from './pokemon-available.types';

@Component({
  selector: 'app-card-pokemon-available',
  templateUrl: './pokemon-available.component.html',
  styleUrls: ['./pokemon-available.component.css']
})
export class PokemonAvailableComponent implements OnInit {

  @Input() pokemon: pokemonAvailableOnGame;
  newEvolvedFrom: number | null = null;

  constructor(
    private _apollo: Apollo,
  ) { }

  ngOnInit(): void {
  }

  urlImage(index: number = 1): string {
    let url = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${('000' + index).substr(-3)}_00.png`;
    return url;
  }

  updateEvolvedFrom(): void {
    if (this.newEvolvedFrom == null) return
    this._apollo.mutate({
      mutation: MUTATION_UPDATE_AVAILABLE_BY_ID,
      variables: {
        idReceived: this.pokemon.id,
        evolvedFrom: this.newEvolvedFrom
      }
    }).subscribe((response:any) => {
      console.log('response updateEvolvedFrom: ',response);
    }, error => {
      console.log('error updateEvolvedFrom: ',error);
    });
  }
  deleteEvolvedFrom(): void {
    this._apollo.mutate({
      mutation: MUTATION_UPDATE_AVAILABLE_BY_ID,
      variables: {
        idReceived: this.pokemon.id,
        evolvedFrom: null
      }
    }).subscribe((response:any) => {
      console.log('response updateEvolvedFrom: ',response);
    }, error => {
      console.log('error updateEvolvedFrom: ',error);
    });
  }

}
