import { gql } from "apollo-angular";

export const QUERY_ALL_POKEMON_LIST = gql`
  query queryGetAllPokemonList {
    pokemonList {
      id
      idRegistro
      nombre
    }
  }
`;