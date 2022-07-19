export interface formInList {
  form: string;
}
export interface pokemonInList {
  nombre: string;
}
export interface pokemonAvailableOnGame {
  id: number;
  idForm: number;
  idPokemon: number;
  evolvedFrom: number;
  pokemonData: pokemonInList;
  form: formInList;
}