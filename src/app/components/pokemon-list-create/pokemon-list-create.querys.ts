import { gql } from "apollo-angular";

export const QUERY_ALL_POKEMON_LIST = gql`
  query queryGetAllPokemonList {
    pokemonList(order_by: {idRegistro: asc}) {
      id
      idRegistro
      nombre
    }
  }
`;

export class pokemonInList {
  id: number = 0;
  idRegistro: number = 0;
  nombre: string = '';
}

export class allPokemonInApi {
  url: string = '';
  name: string = '';
}