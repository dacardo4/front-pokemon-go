import { gql } from "apollo-angular";

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
export const MUTATION_UPDATE_AVAILABLE_BY_ID = gql`
  mutation MUTATION_UPDATE_AVAILABLE_BY_ID(
    $idReceived: Int,
    $evolvedFrom: Int
  ) {
    update_pokemonAvailableOnGame(
      where: {
        id: {_eq: $idReceived}
      },
      _set: {
        evolvedFrom: $evolvedFrom
      }
    ) {
      affected_rows
    }
  }
`;

