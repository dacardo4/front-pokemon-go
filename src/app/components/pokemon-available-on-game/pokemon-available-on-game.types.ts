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
  evolution: pokemonAvailableOnGame[];
}
export const QUERY_ALL_DATA2 = gql`
  query QUERY_ALL_DATA {
    pokemonAvailableOnGame(where: {idPokemon: {_in: [133,60]}}, order_by: {idPokemon: asc}) {
      id
      idForm
      idPokemon
      evolvedFrom
      pokemonData {
        nombre
      }
      form {
        form
      }
      evolution {
        id
        idForm
        idPokemon
        evolvedFrom
        pokemonData {
          nombre
        }
        form {
          form
        }
        evolution {
          id
          idForm
          idPokemon
          evolvedFrom
          pokemonData {
            nombre
          }
          form {
            form
          }
        }
      }
    }
  }
`;
export const QUERY_ALL_DATA = gql`
  query QUERY_ALL_DATA {
    pokemonAvailableOnGame(where: {evolvedFrom: {_is_null: true}}, order_by: {idPokemon: asc}) {
      id
      idForm
      idPokemon
      evolvedFrom
      pokemonData {
        nombre
      }
      form {
        form
      }
      evolution {
        id
        idForm
        idPokemon
        evolvedFrom
        pokemonData {
          nombre
        }
        form {
          form
        }
        evolution {
          id
          idForm
          idPokemon
          evolvedFrom
          pokemonData {
            nombre
          }
          form {
            form
          }
        }
      }
    }
  }
`;

// export const QUERY_ALL_DATA = gql`
//   query QUERY_ALL_DATA {
//     pokemonAvailableOnGame {
//       id
//       idForm
//       idPokemon
//       evolvedFrom
//       pokemonData {
//         nombre
//       }
//       form {
//         form
//       }
//     }
//   }
// `;