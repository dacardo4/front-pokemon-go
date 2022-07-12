import { gql } from "apollo-angular";

export const MUTATION_CREATE_POKEMON_LIST = gql`
  mutation MUTATION_CREATE_POKEMON_LIST(
    $idRegistro: Int,
    $nombre: String
  ) {
    insert_pokemonList(objects: {
      idRegistro: $idRegistro,
      nombre: $nombre
    }) {
      affected_rows
    }
  }
`;