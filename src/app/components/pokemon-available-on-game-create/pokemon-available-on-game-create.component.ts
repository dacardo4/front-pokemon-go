import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { take } from 'rxjs';
import { PokemonService } from 'src/app/services/pokeapi/pokemon.service';
import { formInList, pokemonInList, MUTATION_CREATE_POKEMON_AVAILABLE_ON_GAME, QUERY_ALL_DATA, dataLoaded, allDataLoaded, dataToSave } from './pokemon-available-on-game-create.types';

@Component({
  selector: 'app-pokemon-available-on-game-create',
  templateUrl: './pokemon-available-on-game-create.component.html',
  styleUrls: ['./pokemon-available-on-game-create.component.css']
})
export class PokemonAvailableOnGameCreateComponent implements OnInit {
  
  formList: formInList[] = [];
  pokemonList: pokemonInList[] = [];

  formSelected: formInList | undefined;
  pokemonSelected: pokemonInList | undefined;

  inputFinderPokemon: number;


  /******************************************************** */
  /******************************************************** */
  /******************************************************** */
  allDataLoaded: dataLoaded[];
  allDataToSave: dataToSave[] = [];
  indexAPI: number = 0;
  /******************************************************** */
  /******************************************************** */

  constructor(
    private _apollo: Apollo,
    private _pokemonService: PokemonService,
  ) {
    this.getAllData();
    this.allDataLoaded = allDataLoaded;

    console.log('allDataToSave 1',this.allDataToSave);
    
    this.allDataLoaded.forEach(item => {
      item.pokemon_v2_pokemonspecies.forEach(item2 => {
        this.allDataToSave.push({
          idPokemon: item2.order,
          idForm: 1,
          evolvedFrom: item2.evolves_from_species_id
        });
      });
    });

    console.log('allDataToSave 2',this.allDataToSave);
    
    this.allDataToSave.sort(function (a, b) {
      if (a.idPokemon > b.idPokemon) return 1;
      if (a.idPokemon < b.idPokemon) return -1;
      return 0;
    });
    
    console.log('allDataToSave 3',this.allDataToSave);
    
    // this.registerNewPokemonAvailable(this.allDataToSave[this.indexAPI], this.indexAPI);
    
    // let e = this;
    // const interval = setInterval(function() {

    //   if (e.indexAPI < e.allDataToSave.length) e.registerNewPokemonAvailable(e.allDataToSave[e.indexAPI]);

    //   e.indexAPI++;
    // }, 1500);
  }

  ngOnInit(): void {
  }

  getAllData(): void {
    this._apollo.query({
      query: QUERY_ALL_DATA,
    }).subscribe((result: any) => {
      console.log(result);
      this.formList = result?.data?.formList;
      this.pokemonList = result?.data?.pokemonList;
    });
  }
  searchPokemon(): void {
    console.log('inputFinderPokemon',this.inputFinderPokemon);
    this.pokemonSelected = this.pokemonList.find(p => p.idRegistro === this.inputFinderPokemon);
  }
  getPokemonDataFromAPI(): void {
    this._pokemonService.getOnePokemonByID(1).pipe(take(1)).subscribe(
      data => {
        console.log(data);
        
      }, error => {
        console.log('getPokemonDataFromAPI Error: ',error);
      }
    );
  }

  registerNewPokemonAvailable(item: dataToSave, index: number): void {
    this._apollo.mutate({
      mutation: MUTATION_CREATE_POKEMON_AVAILABLE_ON_GAME,
      variables: {
        idPokemon: item.idPokemon,
        idForm: item.idForm,
        evolvedFrom: item.evolvedFrom
      }
    }).subscribe((response:any) => {
      console.log('response registerNewPokemonAvailable: ',response);
      if (this.allDataToSave[index+1].evolvedFrom != null)
        this.allDataToSave[index+1].evolvedFrom = response.data.insert_pokemonAvailableOnGame.returning[0].id;
      if (this.indexAPI < this.allDataToSave.length) {
        this.indexAPI++;

        let e = this;
        setTimeout(function () {
          e.registerNewPokemonAvailable(e.allDataToSave[e.indexAPI], e.indexAPI);
        }, 1500);

      }
    }, error => {
      console.log('error registerNewPokemonAvailable: ',error);
    });
  }

}
