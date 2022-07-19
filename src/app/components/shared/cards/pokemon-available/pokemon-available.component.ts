import { Component, Input, OnInit } from '@angular/core';
import { pokemonAvailableOnGame } from './pokemon-available.types';

@Component({
  selector: 'app-card-pokemon-available',
  templateUrl: './pokemon-available.component.html',
  styleUrls: ['./pokemon-available.component.css']
})
export class PokemonAvailableComponent implements OnInit {

  @Input() pokemon: pokemonAvailableOnGame;

  constructor() { }

  ngOnInit(): void {
  }

  urlImage(index: number): string {
    let url = `https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${('000' + index).substr(-3)}_00.png`;
    return url;
  }

}
