import { gql } from "apollo-angular";

export interface formInList {
  id: number;
  form: string;
}
export interface pokemonInList {
  idRegistro: number;
  nombre: string;
}
export interface dataLoaded {
  pokemon_v2_pokemonspecies: {
    name: string;
    order: number;
    evolves_from_species_id: number | null;
  }[]
}
export interface dataToSave {
  idPokemon: number,
  idForm: number,
  evolvedFrom: number | null
}
export const QUERY_ALL_DATA = gql`
  query QUERY_ALL_DATA {
    formList {
      id
      form
    }
    pokemonList(order_by: {idRegistro: asc}) {
      idRegistro
      nombre
    }
    pokemonAvailableOnGame {
      id
      idForm
      idPokemon
      evolvedFrom
    }
  }
`;

export const MUTATION_CREATE_POKEMON_AVAILABLE_ON_GAME = gql`
  mutation MUTATION_CREATE_POKEMON_AVAILABLE_ON_GAME(
    $idPokemon: Int,
    $idForm: Int,
    $evolvedFrom: Int
  ) {
    insert_pokemonAvailableOnGame(objects: {
      idPokemon: $idPokemon,
      idForm: $idForm,
      evolvedFrom: $evolvedFrom
    }) {
      returning {
        id
      }
    }
  }
`;


export const allDataLoaded: dataLoaded[] = [
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bulbasaur",
        "order": 1,
        "evolves_from_species_id": null
      },
      {
        "name": "venusaur",
        "order": 3,
        "evolves_from_species_id": 2
      },
      {
        "name": "ivysaur",
        "order": 2,
        "evolves_from_species_id": 1
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "charmander",
        "order": 4,
        "evolves_from_species_id": null
      },
      {
        "name": "charmeleon",
        "order": 5,
        "evolves_from_species_id": 4
      },
      {
        "name": "charizard",
        "order": 6,
        "evolves_from_species_id": 5
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "squirtle",
        "order": 7,
        "evolves_from_species_id": null
      },
      {
        "name": "wartortle",
        "order": 8,
        "evolves_from_species_id": 7
      },
      {
        "name": "blastoise",
        "order": 9,
        "evolves_from_species_id": 8
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "caterpie",
        "order": 10,
        "evolves_from_species_id": null
      },
      {
        "name": "metapod",
        "order": 11,
        "evolves_from_species_id": 10
      },
      {
        "name": "butterfree",
        "order": 12,
        "evolves_from_species_id": 11
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "weedle",
        "order": 13,
        "evolves_from_species_id": null
      },
      {
        "name": "kakuna",
        "order": 14,
        "evolves_from_species_id": 13
      },
      {
        "name": "beedrill",
        "order": 15,
        "evolves_from_species_id": 14
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pidgey",
        "order": 16,
        "evolves_from_species_id": null
      },
      {
        "name": "pidgeotto",
        "order": 17,
        "evolves_from_species_id": 16
      },
      {
        "name": "pidgeot",
        "order": 18,
        "evolves_from_species_id": 17
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rattata",
        "order": 19,
        "evolves_from_species_id": null
      },
      {
        "name": "raticate",
        "order": 20,
        "evolves_from_species_id": 19
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "spearow",
        "order": 21,
        "evolves_from_species_id": null
      },
      {
        "name": "fearow",
        "order": 22,
        "evolves_from_species_id": 21
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "ekans",
        "order": 23,
        "evolves_from_species_id": null
      },
      {
        "name": "arbok",
        "order": 24,
        "evolves_from_species_id": 23
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pikachu",
        "order": 26,
        "evolves_from_species_id": 172
      },
      {
        "name": "raichu",
        "order": 27,
        "evolves_from_species_id": 25
      },
      {
        "name": "pichu",
        "order": 25,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sandshrew",
        "order": 28,
        "evolves_from_species_id": null
      },
      {
        "name": "sandslash",
        "order": 29,
        "evolves_from_species_id": 27
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "nidoran-f",
        "order": 30,
        "evolves_from_species_id": null
      },
      {
        "name": "nidorina",
        "order": 31,
        "evolves_from_species_id": 29
      },
      {
        "name": "nidoqueen",
        "order": 32,
        "evolves_from_species_id": 30
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "nidoran-m",
        "order": 33,
        "evolves_from_species_id": null
      },
      {
        "name": "nidorino",
        "order": 34,
        "evolves_from_species_id": 32
      },
      {
        "name": "nidoking",
        "order": 35,
        "evolves_from_species_id": 33
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "clefairy",
        "order": 37,
        "evolves_from_species_id": 173
      },
      {
        "name": "clefable",
        "order": 38,
        "evolves_from_species_id": 35
      },
      {
        "name": "cleffa",
        "order": 36,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "vulpix",
        "order": 39,
        "evolves_from_species_id": null
      },
      {
        "name": "ninetales",
        "order": 40,
        "evolves_from_species_id": 37
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "jigglypuff",
        "order": 42,
        "evolves_from_species_id": 174
      },
      {
        "name": "wigglytuff",
        "order": 43,
        "evolves_from_species_id": 39
      },
      {
        "name": "igglybuff",
        "order": 41,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zubat",
        "order": 44,
        "evolves_from_species_id": null
      },
      {
        "name": "golbat",
        "order": 45,
        "evolves_from_species_id": 41
      },
      {
        "name": "crobat",
        "order": 46,
        "evolves_from_species_id": 42
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "oddish",
        "order": 47,
        "evolves_from_species_id": null
      },
      {
        "name": "gloom",
        "order": 48,
        "evolves_from_species_id": 43
      },
      {
        "name": "vileplume",
        "order": 49,
        "evolves_from_species_id": 44
      },
      {
        "name": "bellossom",
        "order": 50,
        "evolves_from_species_id": 44
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "paras",
        "order": 51,
        "evolves_from_species_id": null
      },
      {
        "name": "parasect",
        "order": 52,
        "evolves_from_species_id": 46
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "venonat",
        "order": 53,
        "evolves_from_species_id": null
      },
      {
        "name": "venomoth",
        "order": 54,
        "evolves_from_species_id": 48
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "diglett",
        "order": 55,
        "evolves_from_species_id": null
      },
      {
        "name": "dugtrio",
        "order": 56,
        "evolves_from_species_id": 50
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "meowth",
        "order": 57,
        "evolves_from_species_id": null
      },
      {
        "name": "persian",
        "order": 58,
        "evolves_from_species_id": 52
      },
      {
        "name": "perrserker",
        "order": 863,
        "evolves_from_species_id": 52
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "psyduck",
        "order": 59,
        "evolves_from_species_id": null
      },
      {
        "name": "golduck",
        "order": 60,
        "evolves_from_species_id": 54
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mankey",
        "order": 61,
        "evolves_from_species_id": null
      },
      {
        "name": "primeape",
        "order": 62,
        "evolves_from_species_id": 56
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "growlithe",
        "order": 63,
        "evolves_from_species_id": null
      },
      {
        "name": "arcanine",
        "order": 64,
        "evolves_from_species_id": 58
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "poliwag",
        "order": 65,
        "evolves_from_species_id": null
      },
      {
        "name": "poliwhirl",
        "order": 66,
        "evolves_from_species_id": 60
      },
      {
        "name": "poliwrath",
        "order": 67,
        "evolves_from_species_id": 61
      },
      {
        "name": "politoed",
        "order": 68,
        "evolves_from_species_id": 61
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "abra",
        "order": 69,
        "evolves_from_species_id": null
      },
      {
        "name": "kadabra",
        "order": 70,
        "evolves_from_species_id": 63
      },
      {
        "name": "alakazam",
        "order": 71,
        "evolves_from_species_id": 64
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "machop",
        "order": 72,
        "evolves_from_species_id": null
      },
      {
        "name": "machoke",
        "order": 73,
        "evolves_from_species_id": 66
      },
      {
        "name": "machamp",
        "order": 74,
        "evolves_from_species_id": 67
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bellsprout",
        "order": 75,
        "evolves_from_species_id": null
      },
      {
        "name": "weepinbell",
        "order": 76,
        "evolves_from_species_id": 69
      },
      {
        "name": "victreebel",
        "order": 77,
        "evolves_from_species_id": 70
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tentacool",
        "order": 78,
        "evolves_from_species_id": null
      },
      {
        "name": "tentacruel",
        "order": 79,
        "evolves_from_species_id": 72
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "geodude",
        "order": 80,
        "evolves_from_species_id": null
      },
      {
        "name": "graveler",
        "order": 81,
        "evolves_from_species_id": 74
      },
      {
        "name": "golem",
        "order": 82,
        "evolves_from_species_id": 75
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "ponyta",
        "order": 83,
        "evolves_from_species_id": null
      },
      {
        "name": "rapidash",
        "order": 84,
        "evolves_from_species_id": 77
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "slowpoke",
        "order": 85,
        "evolves_from_species_id": null
      },
      {
        "name": "slowbro",
        "order": 86,
        "evolves_from_species_id": 79
      },
      {
        "name": "slowking",
        "order": 87,
        "evolves_from_species_id": 79
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "magnemite",
        "order": 88,
        "evolves_from_species_id": null
      },
      {
        "name": "magneton",
        "order": 89,
        "evolves_from_species_id": 81
      },
      {
        "name": "magnezone",
        "order": 90,
        "evolves_from_species_id": 82
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "farfetchd",
        "order": 91,
        "evolves_from_species_id": null
      },
      {
        "name": "sirfetchd",
        "order": 865,
        "evolves_from_species_id": 83
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "doduo",
        "order": 92,
        "evolves_from_species_id": null
      },
      {
        "name": "dodrio",
        "order": 93,
        "evolves_from_species_id": 84
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "seel",
        "order": 94,
        "evolves_from_species_id": null
      },
      {
        "name": "dewgong",
        "order": 95,
        "evolves_from_species_id": 86
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "grimer",
        "order": 96,
        "evolves_from_species_id": null
      },
      {
        "name": "muk",
        "order": 97,
        "evolves_from_species_id": 88
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shellder",
        "order": 98,
        "evolves_from_species_id": null
      },
      {
        "name": "cloyster",
        "order": 99,
        "evolves_from_species_id": 90
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "gastly",
        "order": 100,
        "evolves_from_species_id": null
      },
      {
        "name": "haunter",
        "order": 101,
        "evolves_from_species_id": 92
      },
      {
        "name": "gengar",
        "order": 102,
        "evolves_from_species_id": 93
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "onix",
        "order": 103,
        "evolves_from_species_id": null
      },
      {
        "name": "steelix",
        "order": 104,
        "evolves_from_species_id": 95
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "drowzee",
        "order": 105,
        "evolves_from_species_id": null
      },
      {
        "name": "hypno",
        "order": 106,
        "evolves_from_species_id": 96
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "krabby",
        "order": 107,
        "evolves_from_species_id": null
      },
      {
        "name": "kingler",
        "order": 108,
        "evolves_from_species_id": 98
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "voltorb",
        "order": 109,
        "evolves_from_species_id": null
      },
      {
        "name": "electrode",
        "order": 110,
        "evolves_from_species_id": 100
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "exeggcute",
        "order": 111,
        "evolves_from_species_id": null
      },
      {
        "name": "exeggutor",
        "order": 112,
        "evolves_from_species_id": 102
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cubone",
        "order": 113,
        "evolves_from_species_id": null
      },
      {
        "name": "marowak",
        "order": 114,
        "evolves_from_species_id": 104
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "hitmonlee",
        "order": 116,
        "evolves_from_species_id": 236
      },
      {
        "name": "hitmonchan",
        "order": 117,
        "evolves_from_species_id": 236
      },
      {
        "name": "tyrogue",
        "order": 115,
        "evolves_from_species_id": null
      },
      {
        "name": "hitmontop",
        "order": 118,
        "evolves_from_species_id": 236
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "lickitung",
        "order": 119,
        "evolves_from_species_id": null
      },
      {
        "name": "lickilicky",
        "order": 120,
        "evolves_from_species_id": 108
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "koffing",
        "order": 121,
        "evolves_from_species_id": null
      },
      {
        "name": "weezing",
        "order": 122,
        "evolves_from_species_id": 109
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rhyhorn",
        "order": 123,
        "evolves_from_species_id": null
      },
      {
        "name": "rhydon",
        "order": 124,
        "evolves_from_species_id": 111
      },
      {
        "name": "rhyperior",
        "order": 125,
        "evolves_from_species_id": 112
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "chansey",
        "order": 127,
        "evolves_from_species_id": 440
      },
      {
        "name": "blissey",
        "order": 128,
        "evolves_from_species_id": 113
      },
      {
        "name": "happiny",
        "order": 126,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tangela",
        "order": 129,
        "evolves_from_species_id": null
      },
      {
        "name": "tangrowth",
        "order": 130,
        "evolves_from_species_id": 114
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "kangaskhan",
        "order": 131,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "horsea",
        "order": 132,
        "evolves_from_species_id": null
      },
      {
        "name": "seadra",
        "order": 133,
        "evolves_from_species_id": 116
      },
      {
        "name": "kingdra",
        "order": 134,
        "evolves_from_species_id": 117
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "goldeen",
        "order": 135,
        "evolves_from_species_id": null
      },
      {
        "name": "seaking",
        "order": 136,
        "evolves_from_species_id": 118
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "staryu",
        "order": 137,
        "evolves_from_species_id": null
      },
      {
        "name": "starmie",
        "order": 138,
        "evolves_from_species_id": 120
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mr-mime",
        "order": 140,
        "evolves_from_species_id": 439
      },
      {
        "name": "mime-jr",
        "order": 139,
        "evolves_from_species_id": null
      },
      {
        "name": "mr-rime",
        "order": 866,
        "evolves_from_species_id": 122
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "scyther",
        "order": 141,
        "evolves_from_species_id": null
      },
      {
        "name": "scizor",
        "order": 142,
        "evolves_from_species_id": 123
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "jynx",
        "order": 144,
        "evolves_from_species_id": 238
      },
      {
        "name": "smoochum",
        "order": 143,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "electabuzz",
        "order": 146,
        "evolves_from_species_id": 239
      },
      {
        "name": "elekid",
        "order": 145,
        "evolves_from_species_id": null
      },
      {
        "name": "electivire",
        "order": 147,
        "evolves_from_species_id": 125
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "magmar",
        "order": 149,
        "evolves_from_species_id": 240
      },
      {
        "name": "magby",
        "order": 148,
        "evolves_from_species_id": null
      },
      {
        "name": "magmortar",
        "order": 150,
        "evolves_from_species_id": 126
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pinsir",
        "order": 151,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tauros",
        "order": 152,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "magikarp",
        "order": 153,
        "evolves_from_species_id": null
      },
      {
        "name": "gyarados",
        "order": 154,
        "evolves_from_species_id": 129
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "lapras",
        "order": 155,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "ditto",
        "order": 156,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "eevee",
        "order": 157,
        "evolves_from_species_id": null
      },
      {
        "name": "vaporeon",
        "order": 158,
        "evolves_from_species_id": 133
      },
      {
        "name": "jolteon",
        "order": 159,
        "evolves_from_species_id": 133
      },
      {
        "name": "flareon",
        "order": 160,
        "evolves_from_species_id": 133
      },
      {
        "name": "espeon",
        "order": 161,
        "evolves_from_species_id": 133
      },
      {
        "name": "umbreon",
        "order": 162,
        "evolves_from_species_id": 133
      },
      {
        "name": "leafeon",
        "order": 163,
        "evolves_from_species_id": 133
      },
      {
        "name": "glaceon",
        "order": 164,
        "evolves_from_species_id": 133
      },
      {
        "name": "sylveon",
        "order": 165,
        "evolves_from_species_id": 133
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "porygon",
        "order": 166,
        "evolves_from_species_id": null
      },
      {
        "name": "porygon2",
        "order": 167,
        "evolves_from_species_id": 137
      },
      {
        "name": "porygon-z",
        "order": 168,
        "evolves_from_species_id": 233
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "omanyte",
        "order": 169,
        "evolves_from_species_id": null
      },
      {
        "name": "omastar",
        "order": 170,
        "evolves_from_species_id": 138
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "kabuto",
        "order": 171,
        "evolves_from_species_id": null
      },
      {
        "name": "kabutops",
        "order": 172,
        "evolves_from_species_id": 140
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "aerodactyl",
        "order": 173,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "snorlax",
        "order": 175,
        "evolves_from_species_id": 446
      },
      {
        "name": "munchlax",
        "order": 174,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "articuno",
        "order": 176,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zapdos",
        "order": 177,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "moltres",
        "order": 178,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dratini",
        "order": 179,
        "evolves_from_species_id": null
      },
      {
        "name": "dragonair",
        "order": 180,
        "evolves_from_species_id": 147
      },
      {
        "name": "dragonite",
        "order": 181,
        "evolves_from_species_id": 148
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mewtwo",
        "order": 182,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mew",
        "order": 183,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "chikorita",
        "order": 184,
        "evolves_from_species_id": null
      },
      {
        "name": "meganium",
        "order": 186,
        "evolves_from_species_id": 153
      },
      {
        "name": "bayleef",
        "order": 185,
        "evolves_from_species_id": 152
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cyndaquil",
        "order": 187,
        "evolves_from_species_id": null
      },
      {
        "name": "quilava",
        "order": 188,
        "evolves_from_species_id": 155
      },
      {
        "name": "typhlosion",
        "order": 189,
        "evolves_from_species_id": 156
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "totodile",
        "order": 190,
        "evolves_from_species_id": null
      },
      {
        "name": "croconaw",
        "order": 191,
        "evolves_from_species_id": 158
      },
      {
        "name": "feraligatr",
        "order": 192,
        "evolves_from_species_id": 159
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sentret",
        "order": 193,
        "evolves_from_species_id": null
      },
      {
        "name": "furret",
        "order": 194,
        "evolves_from_species_id": 161
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "hoothoot",
        "order": 195,
        "evolves_from_species_id": null
      },
      {
        "name": "noctowl",
        "order": 196,
        "evolves_from_species_id": 163
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "ledyba",
        "order": 197,
        "evolves_from_species_id": null
      },
      {
        "name": "ledian",
        "order": 198,
        "evolves_from_species_id": 165
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "spinarak",
        "order": 199,
        "evolves_from_species_id": null
      },
      {
        "name": "ariados",
        "order": 200,
        "evolves_from_species_id": 167
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "chinchou",
        "order": 201,
        "evolves_from_species_id": null
      },
      {
        "name": "lanturn",
        "order": 202,
        "evolves_from_species_id": 170
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "togepi",
        "order": 203,
        "evolves_from_species_id": null
      },
      {
        "name": "togetic",
        "order": 204,
        "evolves_from_species_id": 175
      },
      {
        "name": "togekiss",
        "order": 205,
        "evolves_from_species_id": 176
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "natu",
        "order": 206,
        "evolves_from_species_id": null
      },
      {
        "name": "xatu",
        "order": 207,
        "evolves_from_species_id": 177
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mareep",
        "order": 208,
        "evolves_from_species_id": null
      },
      {
        "name": "flaaffy",
        "order": 209,
        "evolves_from_species_id": 179
      },
      {
        "name": "ampharos",
        "order": 210,
        "evolves_from_species_id": 180
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "marill",
        "order": 212,
        "evolves_from_species_id": 298
      },
      {
        "name": "azumarill",
        "order": 213,
        "evolves_from_species_id": 183
      },
      {
        "name": "azurill",
        "order": 211,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sudowoodo",
        "order": 215,
        "evolves_from_species_id": 438
      },
      {
        "name": "bonsly",
        "order": 214,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "hoppip",
        "order": 216,
        "evolves_from_species_id": null
      },
      {
        "name": "skiploom",
        "order": 217,
        "evolves_from_species_id": 187
      },
      {
        "name": "jumpluff",
        "order": 218,
        "evolves_from_species_id": 188
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "aipom",
        "order": 219,
        "evolves_from_species_id": null
      },
      {
        "name": "ambipom",
        "order": 220,
        "evolves_from_species_id": 190
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sunkern",
        "order": 221,
        "evolves_from_species_id": null
      },
      {
        "name": "sunflora",
        "order": 222,
        "evolves_from_species_id": 191
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "yanma",
        "order": 223,
        "evolves_from_species_id": null
      },
      {
        "name": "yanmega",
        "order": 224,
        "evolves_from_species_id": 193
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "wooper",
        "order": 225,
        "evolves_from_species_id": null
      },
      {
        "name": "quagsire",
        "order": 226,
        "evolves_from_species_id": 194
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "murkrow",
        "order": 227,
        "evolves_from_species_id": null
      },
      {
        "name": "honchkrow",
        "order": 228,
        "evolves_from_species_id": 198
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "misdreavus",
        "order": 229,
        "evolves_from_species_id": null
      },
      {
        "name": "mismagius",
        "order": 230,
        "evolves_from_species_id": 200
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "unown",
        "order": 231,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "wobbuffet",
        "order": 233,
        "evolves_from_species_id": 360
      },
      {
        "name": "wynaut",
        "order": 232,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "girafarig",
        "order": 234,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pineco",
        "order": 235,
        "evolves_from_species_id": null
      },
      {
        "name": "forretress",
        "order": 236,
        "evolves_from_species_id": 204
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dunsparce",
        "order": 237,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "gligar",
        "order": 238,
        "evolves_from_species_id": null
      },
      {
        "name": "gliscor",
        "order": 239,
        "evolves_from_species_id": 207
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "snubbull",
        "order": 240,
        "evolves_from_species_id": null
      },
      {
        "name": "granbull",
        "order": 241,
        "evolves_from_species_id": 209
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "qwilfish",
        "order": 242,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shuckle",
        "order": 243,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "heracross",
        "order": 244,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sneasel",
        "order": 245,
        "evolves_from_species_id": null
      },
      {
        "name": "weavile",
        "order": 246,
        "evolves_from_species_id": 215
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "teddiursa",
        "order": 247,
        "evolves_from_species_id": null
      },
      {
        "name": "ursaring",
        "order": 248,
        "evolves_from_species_id": 216
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "slugma",
        "order": 249,
        "evolves_from_species_id": null
      },
      {
        "name": "magcargo",
        "order": 250,
        "evolves_from_species_id": 218
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "swinub",
        "order": 251,
        "evolves_from_species_id": null
      },
      {
        "name": "piloswine",
        "order": 252,
        "evolves_from_species_id": 220
      },
      {
        "name": "mamoswine",
        "order": 253,
        "evolves_from_species_id": 221
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "corsola",
        "order": 254,
        "evolves_from_species_id": null
      },
      {
        "name": "cursola",
        "order": 864,
        "evolves_from_species_id": 222
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "remoraid",
        "order": 255,
        "evolves_from_species_id": null
      },
      {
        "name": "octillery",
        "order": 256,
        "evolves_from_species_id": 223
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "delibird",
        "order": 257,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mantyke",
        "order": 258,
        "evolves_from_species_id": null
      },
      {
        "name": "mantine",
        "order": 259,
        "evolves_from_species_id": 458
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "skarmory",
        "order": 260,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "houndour",
        "order": 261,
        "evolves_from_species_id": null
      },
      {
        "name": "houndoom",
        "order": 262,
        "evolves_from_species_id": 228
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "phanpy",
        "order": 263,
        "evolves_from_species_id": null
      },
      {
        "name": "donphan",
        "order": 264,
        "evolves_from_species_id": 231
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "stantler",
        "order": 265,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "smeargle",
        "order": 266,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "miltank",
        "order": 267,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "raikou",
        "order": 268,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "entei",
        "order": 269,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "suicune",
        "order": 270,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "larvitar",
        "order": 271,
        "evolves_from_species_id": null
      },
      {
        "name": "pupitar",
        "order": 272,
        "evolves_from_species_id": 246
      },
      {
        "name": "tyranitar",
        "order": 273,
        "evolves_from_species_id": 247
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "lugia",
        "order": 274,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "ho-oh",
        "order": 275,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "celebi",
        "order": 276,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "treecko",
        "order": 277,
        "evolves_from_species_id": null
      },
      {
        "name": "grovyle",
        "order": 278,
        "evolves_from_species_id": 252
      },
      {
        "name": "sceptile",
        "order": 279,
        "evolves_from_species_id": 253
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "torchic",
        "order": 280,
        "evolves_from_species_id": null
      },
      {
        "name": "combusken",
        "order": 281,
        "evolves_from_species_id": 255
      },
      {
        "name": "blaziken",
        "order": 282,
        "evolves_from_species_id": 256
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mudkip",
        "order": 283,
        "evolves_from_species_id": null
      },
      {
        "name": "marshtomp",
        "order": 284,
        "evolves_from_species_id": 258
      },
      {
        "name": "swampert",
        "order": 285,
        "evolves_from_species_id": 259
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "poochyena",
        "order": 286,
        "evolves_from_species_id": null
      },
      {
        "name": "mightyena",
        "order": 287,
        "evolves_from_species_id": 261
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zigzagoon",
        "order": 288,
        "evolves_from_species_id": null
      },
      {
        "name": "linoone",
        "order": 289,
        "evolves_from_species_id": 263
      },
      {
        "name": "obstagoon",
        "order": 862,
        "evolves_from_species_id": 264
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "wurmple",
        "order": 290,
        "evolves_from_species_id": null
      },
      {
        "name": "silcoon",
        "order": 291,
        "evolves_from_species_id": 265
      },
      {
        "name": "beautifly",
        "order": 292,
        "evolves_from_species_id": 266
      },
      {
        "name": "cascoon",
        "order": 293,
        "evolves_from_species_id": 265
      },
      {
        "name": "dustox",
        "order": 294,
        "evolves_from_species_id": 268
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "lotad",
        "order": 295,
        "evolves_from_species_id": null
      },
      {
        "name": "lombre",
        "order": 296,
        "evolves_from_species_id": 270
      },
      {
        "name": "ludicolo",
        "order": 297,
        "evolves_from_species_id": 271
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "seedot",
        "order": 298,
        "evolves_from_species_id": null
      },
      {
        "name": "nuzleaf",
        "order": 299,
        "evolves_from_species_id": 273
      },
      {
        "name": "shiftry",
        "order": 300,
        "evolves_from_species_id": 274
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "taillow",
        "order": 301,
        "evolves_from_species_id": null
      },
      {
        "name": "swellow",
        "order": 302,
        "evolves_from_species_id": 276
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "wingull",
        "order": 303,
        "evolves_from_species_id": null
      },
      {
        "name": "pelipper",
        "order": 304,
        "evolves_from_species_id": 278
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "ralts",
        "order": 305,
        "evolves_from_species_id": null
      },
      {
        "name": "kirlia",
        "order": 306,
        "evolves_from_species_id": 280
      },
      {
        "name": "gardevoir",
        "order": 307,
        "evolves_from_species_id": 281
      },
      {
        "name": "gallade",
        "order": 308,
        "evolves_from_species_id": 281
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "surskit",
        "order": 309,
        "evolves_from_species_id": null
      },
      {
        "name": "masquerain",
        "order": 310,
        "evolves_from_species_id": 283
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shroomish",
        "order": 311,
        "evolves_from_species_id": null
      },
      {
        "name": "breloom",
        "order": 312,
        "evolves_from_species_id": 285
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "slakoth",
        "order": 313,
        "evolves_from_species_id": null
      },
      {
        "name": "vigoroth",
        "order": 314,
        "evolves_from_species_id": 287
      },
      {
        "name": "slaking",
        "order": 315,
        "evolves_from_species_id": 288
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "nincada",
        "order": 316,
        "evolves_from_species_id": null
      },
      {
        "name": "ninjask",
        "order": 317,
        "evolves_from_species_id": 290
      },
      {
        "name": "shedinja",
        "order": 318,
        "evolves_from_species_id": 290
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "whismur",
        "order": 319,
        "evolves_from_species_id": null
      },
      {
        "name": "loudred",
        "order": 320,
        "evolves_from_species_id": 293
      },
      {
        "name": "exploud",
        "order": 321,
        "evolves_from_species_id": 294
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "makuhita",
        "order": 322,
        "evolves_from_species_id": null
      },
      {
        "name": "hariyama",
        "order": 323,
        "evolves_from_species_id": 296
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "nosepass",
        "order": 324,
        "evolves_from_species_id": null
      },
      {
        "name": "probopass",
        "order": 325,
        "evolves_from_species_id": 299
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "skitty",
        "order": 326,
        "evolves_from_species_id": null
      },
      {
        "name": "delcatty",
        "order": 327,
        "evolves_from_species_id": 300
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sableye",
        "order": 328,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mawile",
        "order": 329,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "aron",
        "order": 330,
        "evolves_from_species_id": null
      },
      {
        "name": "lairon",
        "order": 331,
        "evolves_from_species_id": 304
      },
      {
        "name": "aggron",
        "order": 332,
        "evolves_from_species_id": 305
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "meditite",
        "order": 333,
        "evolves_from_species_id": null
      },
      {
        "name": "medicham",
        "order": 334,
        "evolves_from_species_id": 307
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "electrike",
        "order": 335,
        "evolves_from_species_id": null
      },
      {
        "name": "manectric",
        "order": 336,
        "evolves_from_species_id": 309
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "plusle",
        "order": 337,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "minun",
        "order": 338,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "volbeat",
        "order": 339,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "illumise",
        "order": 340,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "roselia",
        "order": 342,
        "evolves_from_species_id": 406
      },
      {
        "name": "budew",
        "order": 341,
        "evolves_from_species_id": null
      },
      {
        "name": "roserade",
        "order": 343,
        "evolves_from_species_id": 315
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "gulpin",
        "order": 344,
        "evolves_from_species_id": null
      },
      {
        "name": "swalot",
        "order": 345,
        "evolves_from_species_id": 316
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "carvanha",
        "order": 346,
        "evolves_from_species_id": null
      },
      {
        "name": "sharpedo",
        "order": 347,
        "evolves_from_species_id": 318
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "wailmer",
        "order": 348,
        "evolves_from_species_id": null
      },
      {
        "name": "wailord",
        "order": 349,
        "evolves_from_species_id": 320
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "numel",
        "order": 350,
        "evolves_from_species_id": null
      },
      {
        "name": "camerupt",
        "order": 351,
        "evolves_from_species_id": 322
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "torkoal",
        "order": 352,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "spoink",
        "order": 353,
        "evolves_from_species_id": null
      },
      {
        "name": "grumpig",
        "order": 354,
        "evolves_from_species_id": 325
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "spinda",
        "order": 355,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "trapinch",
        "order": 356,
        "evolves_from_species_id": null
      },
      {
        "name": "vibrava",
        "order": 357,
        "evolves_from_species_id": 328
      },
      {
        "name": "flygon",
        "order": 358,
        "evolves_from_species_id": 329
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cacnea",
        "order": 359,
        "evolves_from_species_id": null
      },
      {
        "name": "cacturne",
        "order": 360,
        "evolves_from_species_id": 331
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "swablu",
        "order": 361,
        "evolves_from_species_id": null
      },
      {
        "name": "altaria",
        "order": 362,
        "evolves_from_species_id": 333
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zangoose",
        "order": 363,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "seviper",
        "order": 364,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "lunatone",
        "order": 365,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "solrock",
        "order": 366,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "barboach",
        "order": 367,
        "evolves_from_species_id": null
      },
      {
        "name": "whiscash",
        "order": 368,
        "evolves_from_species_id": 339
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "corphish",
        "order": 369,
        "evolves_from_species_id": null
      },
      {
        "name": "crawdaunt",
        "order": 370,
        "evolves_from_species_id": 341
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "baltoy",
        "order": 371,
        "evolves_from_species_id": null
      },
      {
        "name": "claydol",
        "order": 372,
        "evolves_from_species_id": 343
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "lileep",
        "order": 373,
        "evolves_from_species_id": null
      },
      {
        "name": "cradily",
        "order": 374,
        "evolves_from_species_id": 345
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "anorith",
        "order": 375,
        "evolves_from_species_id": null
      },
      {
        "name": "armaldo",
        "order": 376,
        "evolves_from_species_id": 347
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "feebas",
        "order": 377,
        "evolves_from_species_id": null
      },
      {
        "name": "milotic",
        "order": 378,
        "evolves_from_species_id": 349
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "castform",
        "order": 379,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "kecleon",
        "order": 380,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shuppet",
        "order": 381,
        "evolves_from_species_id": null
      },
      {
        "name": "banette",
        "order": 382,
        "evolves_from_species_id": 353
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "duskull",
        "order": 383,
        "evolves_from_species_id": null
      },
      {
        "name": "dusclops",
        "order": 384,
        "evolves_from_species_id": 355
      },
      {
        "name": "dusknoir",
        "order": 385,
        "evolves_from_species_id": 356
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tropius",
        "order": 386,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "chimecho",
        "order": 388,
        "evolves_from_species_id": 433
      },
      {
        "name": "chingling",
        "order": 387,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "absol",
        "order": 389,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "snorunt",
        "order": 390,
        "evolves_from_species_id": null
      },
      {
        "name": "glalie",
        "order": 391,
        "evolves_from_species_id": 361
      },
      {
        "name": "froslass",
        "order": 392,
        "evolves_from_species_id": 361
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "spheal",
        "order": 393,
        "evolves_from_species_id": null
      },
      {
        "name": "sealeo",
        "order": 394,
        "evolves_from_species_id": 363
      },
      {
        "name": "walrein",
        "order": 395,
        "evolves_from_species_id": 364
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "clamperl",
        "order": 396,
        "evolves_from_species_id": null
      },
      {
        "name": "huntail",
        "order": 397,
        "evolves_from_species_id": 366
      },
      {
        "name": "gorebyss",
        "order": 398,
        "evolves_from_species_id": 366
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "relicanth",
        "order": 399,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "luvdisc",
        "order": 400,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bagon",
        "order": 401,
        "evolves_from_species_id": null
      },
      {
        "name": "shelgon",
        "order": 402,
        "evolves_from_species_id": 371
      },
      {
        "name": "salamence",
        "order": 403,
        "evolves_from_species_id": 372
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "beldum",
        "order": 404,
        "evolves_from_species_id": null
      },
      {
        "name": "metang",
        "order": 405,
        "evolves_from_species_id": 374
      },
      {
        "name": "metagross",
        "order": 406,
        "evolves_from_species_id": 375
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "regirock",
        "order": 407,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "regice",
        "order": 408,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "registeel",
        "order": 409,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "latias",
        "order": 410,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "latios",
        "order": 411,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "kyogre",
        "order": 412,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "groudon",
        "order": 413,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rayquaza",
        "order": 414,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "jirachi",
        "order": 415,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "deoxys",
        "order": 416,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "turtwig",
        "order": 417,
        "evolves_from_species_id": null
      },
      {
        "name": "grotle",
        "order": 418,
        "evolves_from_species_id": 387
      },
      {
        "name": "torterra",
        "order": 419,
        "evolves_from_species_id": 388
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "chimchar",
        "order": 420,
        "evolves_from_species_id": null
      },
      {
        "name": "infernape",
        "order": 422,
        "evolves_from_species_id": 391
      },
      {
        "name": "monferno",
        "order": 421,
        "evolves_from_species_id": 390
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "piplup",
        "order": 423,
        "evolves_from_species_id": null
      },
      {
        "name": "prinplup",
        "order": 424,
        "evolves_from_species_id": 393
      },
      {
        "name": "empoleon",
        "order": 425,
        "evolves_from_species_id": 394
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "starly",
        "order": 426,
        "evolves_from_species_id": null
      },
      {
        "name": "staravia",
        "order": 427,
        "evolves_from_species_id": 396
      },
      {
        "name": "staraptor",
        "order": 428,
        "evolves_from_species_id": 397
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bidoof",
        "order": 429,
        "evolves_from_species_id": null
      },
      {
        "name": "bibarel",
        "order": 430,
        "evolves_from_species_id": 399
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "kricketot",
        "order": 431,
        "evolves_from_species_id": null
      },
      {
        "name": "kricketune",
        "order": 432,
        "evolves_from_species_id": 401
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shinx",
        "order": 433,
        "evolves_from_species_id": null
      },
      {
        "name": "luxio",
        "order": 434,
        "evolves_from_species_id": 403
      },
      {
        "name": "luxray",
        "order": 435,
        "evolves_from_species_id": 404
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cranidos",
        "order": 436,
        "evolves_from_species_id": null
      },
      {
        "name": "rampardos",
        "order": 437,
        "evolves_from_species_id": 408
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shieldon",
        "order": 438,
        "evolves_from_species_id": null
      },
      {
        "name": "bastiodon",
        "order": 439,
        "evolves_from_species_id": 410
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "burmy",
        "order": 440,
        "evolves_from_species_id": null
      },
      {
        "name": "wormadam",
        "order": 441,
        "evolves_from_species_id": 412
      },
      {
        "name": "mothim",
        "order": 442,
        "evolves_from_species_id": 412
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "combee",
        "order": 443,
        "evolves_from_species_id": null
      },
      {
        "name": "vespiquen",
        "order": 444,
        "evolves_from_species_id": 415
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pachirisu",
        "order": 445,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "buizel",
        "order": 446,
        "evolves_from_species_id": null
      },
      {
        "name": "floatzel",
        "order": 447,
        "evolves_from_species_id": 418
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cherubi",
        "order": 448,
        "evolves_from_species_id": null
      },
      {
        "name": "cherrim",
        "order": 449,
        "evolves_from_species_id": 420
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shellos",
        "order": 450,
        "evolves_from_species_id": null
      },
      {
        "name": "gastrodon",
        "order": 451,
        "evolves_from_species_id": 422
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "drifloon",
        "order": 452,
        "evolves_from_species_id": null
      },
      {
        "name": "drifblim",
        "order": 453,
        "evolves_from_species_id": 425
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "buneary",
        "order": 454,
        "evolves_from_species_id": null
      },
      {
        "name": "lopunny",
        "order": 455,
        "evolves_from_species_id": 427
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "glameow",
        "order": 456,
        "evolves_from_species_id": null
      },
      {
        "name": "purugly",
        "order": 457,
        "evolves_from_species_id": 431
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "stunky",
        "order": 458,
        "evolves_from_species_id": null
      },
      {
        "name": "skuntank",
        "order": 459,
        "evolves_from_species_id": 434
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bronzor",
        "order": 460,
        "evolves_from_species_id": null
      },
      {
        "name": "bronzong",
        "order": 461,
        "evolves_from_species_id": 436
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "chatot",
        "order": 462,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "spiritomb",
        "order": 463,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "gible",
        "order": 464,
        "evolves_from_species_id": null
      },
      {
        "name": "gabite",
        "order": 465,
        "evolves_from_species_id": 443
      },
      {
        "name": "garchomp",
        "order": 466,
        "evolves_from_species_id": 444
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "riolu",
        "order": 467,
        "evolves_from_species_id": null
      },
      {
        "name": "lucario",
        "order": 468,
        "evolves_from_species_id": 447
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "hippopotas",
        "order": 469,
        "evolves_from_species_id": null
      },
      {
        "name": "hippowdon",
        "order": 470,
        "evolves_from_species_id": 449
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "skorupi",
        "order": 471,
        "evolves_from_species_id": null
      },
      {
        "name": "drapion",
        "order": 472,
        "evolves_from_species_id": 451
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "croagunk",
        "order": 473,
        "evolves_from_species_id": null
      },
      {
        "name": "toxicroak",
        "order": 474,
        "evolves_from_species_id": 453
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "carnivine",
        "order": 475,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "finneon",
        "order": 476,
        "evolves_from_species_id": null
      },
      {
        "name": "lumineon",
        "order": 477,
        "evolves_from_species_id": 456
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "snover",
        "order": 478,
        "evolves_from_species_id": null
      },
      {
        "name": "abomasnow",
        "order": 479,
        "evolves_from_species_id": 459
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rotom",
        "order": 480,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "uxie",
        "order": 481,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mesprit",
        "order": 482,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "azelf",
        "order": 483,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dialga",
        "order": 484,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "palkia",
        "order": 485,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "heatran",
        "order": 486,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "regigigas",
        "order": 487,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "giratina",
        "order": 488,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cresselia",
        "order": 489,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "phione",
        "order": 490,
        "evolves_from_species_id": null
      },
      {
        "name": "manaphy",
        "order": 491,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "darkrai",
        "order": 492,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shaymin",
        "order": 493,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "arceus",
        "order": 494,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "victini",
        "order": 495,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "snivy",
        "order": 496,
        "evolves_from_species_id": null
      },
      {
        "name": "servine",
        "order": 497,
        "evolves_from_species_id": 495
      },
      {
        "name": "serperior",
        "order": 498,
        "evolves_from_species_id": 496
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tepig",
        "order": 499,
        "evolves_from_species_id": null
      },
      {
        "name": "pignite",
        "order": 500,
        "evolves_from_species_id": 498
      },
      {
        "name": "emboar",
        "order": 501,
        "evolves_from_species_id": 499
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "oshawott",
        "order": 502,
        "evolves_from_species_id": null
      },
      {
        "name": "dewott",
        "order": 503,
        "evolves_from_species_id": 501
      },
      {
        "name": "samurott",
        "order": 504,
        "evolves_from_species_id": 502
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "patrat",
        "order": 505,
        "evolves_from_species_id": null
      },
      {
        "name": "watchog",
        "order": 506,
        "evolves_from_species_id": 504
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "lillipup",
        "order": 507,
        "evolves_from_species_id": null
      },
      {
        "name": "stoutland",
        "order": 509,
        "evolves_from_species_id": 507
      },
      {
        "name": "herdier",
        "order": 508,
        "evolves_from_species_id": 506
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "purrloin",
        "order": 510,
        "evolves_from_species_id": null
      },
      {
        "name": "liepard",
        "order": 511,
        "evolves_from_species_id": 509
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pansage",
        "order": 512,
        "evolves_from_species_id": null
      },
      {
        "name": "simisage",
        "order": 513,
        "evolves_from_species_id": 511
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pansear",
        "order": 514,
        "evolves_from_species_id": null
      },
      {
        "name": "simisear",
        "order": 515,
        "evolves_from_species_id": 513
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "panpour",
        "order": 516,
        "evolves_from_species_id": null
      },
      {
        "name": "simipour",
        "order": 517,
        "evolves_from_species_id": 515
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "munna",
        "order": 518,
        "evolves_from_species_id": null
      },
      {
        "name": "musharna",
        "order": 519,
        "evolves_from_species_id": 517
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pidove",
        "order": 520,
        "evolves_from_species_id": null
      },
      {
        "name": "tranquill",
        "order": 521,
        "evolves_from_species_id": 519
      },
      {
        "name": "unfezant",
        "order": 522,
        "evolves_from_species_id": 520
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "blitzle",
        "order": 523,
        "evolves_from_species_id": null
      },
      {
        "name": "zebstrika",
        "order": 524,
        "evolves_from_species_id": 522
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "roggenrola",
        "order": 525,
        "evolves_from_species_id": null
      },
      {
        "name": "boldore",
        "order": 526,
        "evolves_from_species_id": 524
      },
      {
        "name": "gigalith",
        "order": 527,
        "evolves_from_species_id": 525
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "woobat",
        "order": 528,
        "evolves_from_species_id": null
      },
      {
        "name": "swoobat",
        "order": 529,
        "evolves_from_species_id": 527
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "drilbur",
        "order": 530,
        "evolves_from_species_id": null
      },
      {
        "name": "excadrill",
        "order": 531,
        "evolves_from_species_id": 529
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "audino",
        "order": 532,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "timburr",
        "order": 533,
        "evolves_from_species_id": null
      },
      {
        "name": "conkeldurr",
        "order": 535,
        "evolves_from_species_id": 533
      },
      {
        "name": "gurdurr",
        "order": 534,
        "evolves_from_species_id": 532
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tympole",
        "order": 536,
        "evolves_from_species_id": null
      },
      {
        "name": "palpitoad",
        "order": 537,
        "evolves_from_species_id": 535
      },
      {
        "name": "seismitoad",
        "order": 538,
        "evolves_from_species_id": 536
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "throh",
        "order": 539,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sawk",
        "order": 540,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sewaddle",
        "order": 541,
        "evolves_from_species_id": null
      },
      {
        "name": "swadloon",
        "order": 542,
        "evolves_from_species_id": 540
      },
      {
        "name": "leavanny",
        "order": 543,
        "evolves_from_species_id": 541
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "venipede",
        "order": 544,
        "evolves_from_species_id": null
      },
      {
        "name": "whirlipede",
        "order": 545,
        "evolves_from_species_id": 543
      },
      {
        "name": "scolipede",
        "order": 546,
        "evolves_from_species_id": 544
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cottonee",
        "order": 547,
        "evolves_from_species_id": null
      },
      {
        "name": "whimsicott",
        "order": 548,
        "evolves_from_species_id": 546
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "petilil",
        "order": 549,
        "evolves_from_species_id": null
      },
      {
        "name": "lilligant",
        "order": 550,
        "evolves_from_species_id": 548
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "basculin",
        "order": 551,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sandile",
        "order": 552,
        "evolves_from_species_id": null
      },
      {
        "name": "krokorok",
        "order": 553,
        "evolves_from_species_id": 551
      },
      {
        "name": "krookodile",
        "order": 554,
        "evolves_from_species_id": 552
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "darumaka",
        "order": 555,
        "evolves_from_species_id": null
      },
      {
        "name": "darmanitan",
        "order": 556,
        "evolves_from_species_id": 554
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "maractus",
        "order": 557,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dwebble",
        "order": 558,
        "evolves_from_species_id": null
      },
      {
        "name": "crustle",
        "order": 559,
        "evolves_from_species_id": 557
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "scraggy",
        "order": 560,
        "evolves_from_species_id": null
      },
      {
        "name": "scrafty",
        "order": 561,
        "evolves_from_species_id": 559
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sigilyph",
        "order": 562,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "yamask",
        "order": 563,
        "evolves_from_species_id": null
      },
      {
        "name": "cofagrigus",
        "order": 564,
        "evolves_from_species_id": 562
      },
      {
        "name": "runerigus",
        "order": 867,
        "evolves_from_species_id": 562
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tirtouga",
        "order": 565,
        "evolves_from_species_id": null
      },
      {
        "name": "carracosta",
        "order": 566,
        "evolves_from_species_id": 564
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "archen",
        "order": 567,
        "evolves_from_species_id": null
      },
      {
        "name": "archeops",
        "order": 568,
        "evolves_from_species_id": 566
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "trubbish",
        "order": 569,
        "evolves_from_species_id": null
      },
      {
        "name": "garbodor",
        "order": 570,
        "evolves_from_species_id": 568
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zorua",
        "order": 571,
        "evolves_from_species_id": null
      },
      {
        "name": "zoroark",
        "order": 572,
        "evolves_from_species_id": 570
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "minccino",
        "order": 573,
        "evolves_from_species_id": null
      },
      {
        "name": "cinccino",
        "order": 574,
        "evolves_from_species_id": 572
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "gothita",
        "order": 575,
        "evolves_from_species_id": null
      },
      {
        "name": "gothorita",
        "order": 576,
        "evolves_from_species_id": 574
      },
      {
        "name": "gothitelle",
        "order": 577,
        "evolves_from_species_id": 575
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "solosis",
        "order": 578,
        "evolves_from_species_id": null
      },
      {
        "name": "duosion",
        "order": 579,
        "evolves_from_species_id": 577
      },
      {
        "name": "reuniclus",
        "order": 580,
        "evolves_from_species_id": 578
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "ducklett",
        "order": 581,
        "evolves_from_species_id": null
      },
      {
        "name": "swanna",
        "order": 582,
        "evolves_from_species_id": 580
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "vanillite",
        "order": 583,
        "evolves_from_species_id": null
      },
      {
        "name": "vanillish",
        "order": 584,
        "evolves_from_species_id": 582
      },
      {
        "name": "vanilluxe",
        "order": 585,
        "evolves_from_species_id": 583
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "deerling",
        "order": 586,
        "evolves_from_species_id": null
      },
      {
        "name": "sawsbuck",
        "order": 587,
        "evolves_from_species_id": 585
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "emolga",
        "order": 588,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "karrablast",
        "order": 589,
        "evolves_from_species_id": null
      },
      {
        "name": "escavalier",
        "order": 590,
        "evolves_from_species_id": 588
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "foongus",
        "order": 591,
        "evolves_from_species_id": null
      },
      {
        "name": "amoonguss",
        "order": 592,
        "evolves_from_species_id": 590
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "frillish",
        "order": 593,
        "evolves_from_species_id": null
      },
      {
        "name": "jellicent",
        "order": 594,
        "evolves_from_species_id": 592
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "alomomola",
        "order": 595,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "joltik",
        "order": 596,
        "evolves_from_species_id": null
      },
      {
        "name": "galvantula",
        "order": 597,
        "evolves_from_species_id": 595
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "ferroseed",
        "order": 598,
        "evolves_from_species_id": null
      },
      {
        "name": "ferrothorn",
        "order": 599,
        "evolves_from_species_id": 597
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "klink",
        "order": 600,
        "evolves_from_species_id": null
      },
      {
        "name": "klang",
        "order": 601,
        "evolves_from_species_id": 599
      },
      {
        "name": "klinklang",
        "order": 602,
        "evolves_from_species_id": 600
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tynamo",
        "order": 603,
        "evolves_from_species_id": null
      },
      {
        "name": "eelektrik",
        "order": 604,
        "evolves_from_species_id": 602
      },
      {
        "name": "eelektross",
        "order": 605,
        "evolves_from_species_id": 603
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "elgyem",
        "order": 606,
        "evolves_from_species_id": null
      },
      {
        "name": "beheeyem",
        "order": 607,
        "evolves_from_species_id": 605
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "litwick",
        "order": 608,
        "evolves_from_species_id": null
      },
      {
        "name": "lampent",
        "order": 609,
        "evolves_from_species_id": 607
      },
      {
        "name": "chandelure",
        "order": 610,
        "evolves_from_species_id": 608
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "axew",
        "order": 611,
        "evolves_from_species_id": null
      },
      {
        "name": "fraxure",
        "order": 612,
        "evolves_from_species_id": 610
      },
      {
        "name": "haxorus",
        "order": 613,
        "evolves_from_species_id": 611
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cubchoo",
        "order": 614,
        "evolves_from_species_id": null
      },
      {
        "name": "beartic",
        "order": 615,
        "evolves_from_species_id": 613
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cryogonal",
        "order": 616,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "shelmet",
        "order": 617,
        "evolves_from_species_id": null
      },
      {
        "name": "accelgor",
        "order": 618,
        "evolves_from_species_id": 616
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "stunfisk",
        "order": 619,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mienfoo",
        "order": 620,
        "evolves_from_species_id": null
      },
      {
        "name": "mienshao",
        "order": 621,
        "evolves_from_species_id": 619
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "druddigon",
        "order": 622,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "golett",
        "order": 623,
        "evolves_from_species_id": null
      },
      {
        "name": "golurk",
        "order": 624,
        "evolves_from_species_id": 622
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pawniard",
        "order": 625,
        "evolves_from_species_id": null
      },
      {
        "name": "bisharp",
        "order": 626,
        "evolves_from_species_id": 624
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bouffalant",
        "order": 627,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rufflet",
        "order": 628,
        "evolves_from_species_id": null
      },
      {
        "name": "braviary",
        "order": 629,
        "evolves_from_species_id": 627
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "vullaby",
        "order": 630,
        "evolves_from_species_id": null
      },
      {
        "name": "mandibuzz",
        "order": 631,
        "evolves_from_species_id": 629
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "heatmor",
        "order": 632,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "durant",
        "order": 633,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "deino",
        "order": 634,
        "evolves_from_species_id": null
      },
      {
        "name": "zweilous",
        "order": 635,
        "evolves_from_species_id": 633
      },
      {
        "name": "hydreigon",
        "order": 636,
        "evolves_from_species_id": 634
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "larvesta",
        "order": 637,
        "evolves_from_species_id": null
      },
      {
        "name": "volcarona",
        "order": 638,
        "evolves_from_species_id": 636
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cobalion",
        "order": 639,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "terrakion",
        "order": 640,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "virizion",
        "order": 641,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tornadus",
        "order": 642,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "thundurus",
        "order": 643,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "reshiram",
        "order": 644,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zekrom",
        "order": 645,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "landorus",
        "order": 646,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "kyurem",
        "order": 647,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "keldeo",
        "order": 648,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "meloetta",
        "order": 649,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "genesect",
        "order": 650,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "chespin",
        "order": 651,
        "evolves_from_species_id": null
      },
      {
        "name": "quilladin",
        "order": 652,
        "evolves_from_species_id": 650
      },
      {
        "name": "chesnaught",
        "order": 653,
        "evolves_from_species_id": 651
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "fennekin",
        "order": 654,
        "evolves_from_species_id": null
      },
      {
        "name": "braixen",
        "order": 655,
        "evolves_from_species_id": 653
      },
      {
        "name": "delphox",
        "order": 656,
        "evolves_from_species_id": 654
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "froakie",
        "order": 657,
        "evolves_from_species_id": null
      },
      {
        "name": "frogadier",
        "order": 658,
        "evolves_from_species_id": 656
      },
      {
        "name": "greninja",
        "order": 659,
        "evolves_from_species_id": 657
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bunnelby",
        "order": 660,
        "evolves_from_species_id": null
      },
      {
        "name": "diggersby",
        "order": 661,
        "evolves_from_species_id": 659
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "fletchling",
        "order": 662,
        "evolves_from_species_id": null
      },
      {
        "name": "fletchinder",
        "order": 663,
        "evolves_from_species_id": 661
      },
      {
        "name": "talonflame",
        "order": 664,
        "evolves_from_species_id": 662
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "scatterbug",
        "order": 665,
        "evolves_from_species_id": null
      },
      {
        "name": "spewpa",
        "order": 666,
        "evolves_from_species_id": 664
      },
      {
        "name": "vivillon",
        "order": 667,
        "evolves_from_species_id": 665
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "litleo",
        "order": 668,
        "evolves_from_species_id": null
      },
      {
        "name": "pyroar",
        "order": 669,
        "evolves_from_species_id": 667
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "flabebe",
        "order": 670,
        "evolves_from_species_id": null
      },
      {
        "name": "floette",
        "order": 671,
        "evolves_from_species_id": 669
      },
      {
        "name": "florges",
        "order": 672,
        "evolves_from_species_id": 670
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "skiddo",
        "order": 673,
        "evolves_from_species_id": null
      },
      {
        "name": "gogoat",
        "order": 674,
        "evolves_from_species_id": 672
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pancham",
        "order": 675,
        "evolves_from_species_id": null
      },
      {
        "name": "pangoro",
        "order": 676,
        "evolves_from_species_id": 674
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "furfrou",
        "order": 677,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "espurr",
        "order": 678,
        "evolves_from_species_id": null
      },
      {
        "name": "meowstic",
        "order": 679,
        "evolves_from_species_id": 677
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "honedge",
        "order": 680,
        "evolves_from_species_id": null
      },
      {
        "name": "doublade",
        "order": 681,
        "evolves_from_species_id": 679
      },
      {
        "name": "aegislash",
        "order": 682,
        "evolves_from_species_id": 680
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "spritzee",
        "order": 683,
        "evolves_from_species_id": null
      },
      {
        "name": "aromatisse",
        "order": 684,
        "evolves_from_species_id": 682
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "swirlix",
        "order": 685,
        "evolves_from_species_id": null
      },
      {
        "name": "slurpuff",
        "order": 686,
        "evolves_from_species_id": 684
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "inkay",
        "order": 687,
        "evolves_from_species_id": null
      },
      {
        "name": "malamar",
        "order": 688,
        "evolves_from_species_id": 686
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "binacle",
        "order": 689,
        "evolves_from_species_id": null
      },
      {
        "name": "barbaracle",
        "order": 690,
        "evolves_from_species_id": 688
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "skrelp",
        "order": 691,
        "evolves_from_species_id": null
      },
      {
        "name": "dragalge",
        "order": 692,
        "evolves_from_species_id": 690
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "clauncher",
        "order": 693,
        "evolves_from_species_id": null
      },
      {
        "name": "clawitzer",
        "order": 694,
        "evolves_from_species_id": 692
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "helioptile",
        "order": 695,
        "evolves_from_species_id": null
      },
      {
        "name": "heliolisk",
        "order": 696,
        "evolves_from_species_id": 694
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tyrunt",
        "order": 697,
        "evolves_from_species_id": null
      },
      {
        "name": "tyrantrum",
        "order": 698,
        "evolves_from_species_id": 696
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "amaura",
        "order": 699,
        "evolves_from_species_id": null
      },
      {
        "name": "aurorus",
        "order": 700,
        "evolves_from_species_id": 698
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "hawlucha",
        "order": 701,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dedenne",
        "order": 702,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "carbink",
        "order": 703,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "goomy",
        "order": 704,
        "evolves_from_species_id": null
      },
      {
        "name": "sliggoo",
        "order": 705,
        "evolves_from_species_id": 704
      },
      {
        "name": "goodra",
        "order": 706,
        "evolves_from_species_id": 705
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "klefki",
        "order": 707,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "phantump",
        "order": 708,
        "evolves_from_species_id": null
      },
      {
        "name": "trevenant",
        "order": 709,
        "evolves_from_species_id": 708
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pumpkaboo",
        "order": 710,
        "evolves_from_species_id": null
      },
      {
        "name": "gourgeist",
        "order": 711,
        "evolves_from_species_id": 710
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bergmite",
        "order": 712,
        "evolves_from_species_id": null
      },
      {
        "name": "avalugg",
        "order": 713,
        "evolves_from_species_id": 712
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "noibat",
        "order": 714,
        "evolves_from_species_id": null
      },
      {
        "name": "noivern",
        "order": 715,
        "evolves_from_species_id": 714
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "xerneas",
        "order": 716,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "yveltal",
        "order": 717,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zygarde",
        "order": 718,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "diancie",
        "order": 719,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "hoopa",
        "order": 720,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "volcanion",
        "order": 721,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rowlet",
        "order": 722,
        "evolves_from_species_id": null
      },
      {
        "name": "dartrix",
        "order": 723,
        "evolves_from_species_id": 722
      },
      {
        "name": "decidueye",
        "order": 724,
        "evolves_from_species_id": 723
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "litten",
        "order": 725,
        "evolves_from_species_id": null
      },
      {
        "name": "torracat",
        "order": 726,
        "evolves_from_species_id": 725
      },
      {
        "name": "incineroar",
        "order": 727,
        "evolves_from_species_id": 726
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "popplio",
        "order": 728,
        "evolves_from_species_id": null
      },
      {
        "name": "primarina",
        "order": 730,
        "evolves_from_species_id": 729
      },
      {
        "name": "brionne",
        "order": 729,
        "evolves_from_species_id": 728
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pikipek",
        "order": 731,
        "evolves_from_species_id": null
      },
      {
        "name": "trumbeak",
        "order": 732,
        "evolves_from_species_id": 731
      },
      {
        "name": "toucannon",
        "order": 733,
        "evolves_from_species_id": 732
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "yungoos",
        "order": 734,
        "evolves_from_species_id": null
      },
      {
        "name": "gumshoos",
        "order": 735,
        "evolves_from_species_id": 734
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "grubbin",
        "order": 736,
        "evolves_from_species_id": null
      },
      {
        "name": "charjabug",
        "order": 737,
        "evolves_from_species_id": 736
      },
      {
        "name": "vikavolt",
        "order": 738,
        "evolves_from_species_id": 737
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "crabrawler",
        "order": 739,
        "evolves_from_species_id": null
      },
      {
        "name": "crabominable",
        "order": 740,
        "evolves_from_species_id": 739
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "oricorio",
        "order": 741,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cutiefly",
        "order": 742,
        "evolves_from_species_id": null
      },
      {
        "name": "ribombee",
        "order": 743,
        "evolves_from_species_id": 742
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rockruff",
        "order": 744,
        "evolves_from_species_id": null
      },
      {
        "name": "lycanroc",
        "order": 745,
        "evolves_from_species_id": 744
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "wishiwashi",
        "order": 746,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mareanie",
        "order": 747,
        "evolves_from_species_id": null
      },
      {
        "name": "toxapex",
        "order": 748,
        "evolves_from_species_id": 747
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mudbray",
        "order": 749,
        "evolves_from_species_id": null
      },
      {
        "name": "mudsdale",
        "order": 750,
        "evolves_from_species_id": 749
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dewpider",
        "order": 751,
        "evolves_from_species_id": null
      },
      {
        "name": "araquanid",
        "order": 752,
        "evolves_from_species_id": 751
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "fomantis",
        "order": 753,
        "evolves_from_species_id": null
      },
      {
        "name": "lurantis",
        "order": 754,
        "evolves_from_species_id": 753
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "morelull",
        "order": 755,
        "evolves_from_species_id": null
      },
      {
        "name": "shiinotic",
        "order": 756,
        "evolves_from_species_id": 755
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "salandit",
        "order": 757,
        "evolves_from_species_id": null
      },
      {
        "name": "salazzle",
        "order": 758,
        "evolves_from_species_id": 757
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "stufful",
        "order": 759,
        "evolves_from_species_id": null
      },
      {
        "name": "bewear",
        "order": 760,
        "evolves_from_species_id": 759
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bounsweet",
        "order": 761,
        "evolves_from_species_id": null
      },
      {
        "name": "steenee",
        "order": 762,
        "evolves_from_species_id": 761
      },
      {
        "name": "tsareena",
        "order": 763,
        "evolves_from_species_id": 762
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "comfey",
        "order": 764,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "oranguru",
        "order": 765,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "passimian",
        "order": 766,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "wimpod",
        "order": 767,
        "evolves_from_species_id": null
      },
      {
        "name": "golisopod",
        "order": 768,
        "evolves_from_species_id": 767
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sandygast",
        "order": 769,
        "evolves_from_species_id": null
      },
      {
        "name": "palossand",
        "order": 770,
        "evolves_from_species_id": 769
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pyukumuku",
        "order": 771,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "type-null",
        "order": 772,
        "evolves_from_species_id": null
      },
      {
        "name": "silvally",
        "order": 773,
        "evolves_from_species_id": 772
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "minior",
        "order": 774,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "komala",
        "order": 775,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "turtonator",
        "order": 776,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "togedemaru",
        "order": 777,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "mimikyu",
        "order": 778,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "bruxish",
        "order": 779,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "drampa",
        "order": 780,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dhelmise",
        "order": 781,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "jangmo-o",
        "order": 782,
        "evolves_from_species_id": null
      },
      {
        "name": "hakamo-o",
        "order": 783,
        "evolves_from_species_id": 782
      },
      {
        "name": "kommo-o",
        "order": 784,
        "evolves_from_species_id": 783
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tapu-koko",
        "order": 785,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tapu-lele",
        "order": 786,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tapu-bulu",
        "order": 787,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "tapu-fini",
        "order": 788,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cosmog",
        "order": 789,
        "evolves_from_species_id": null
      },
      {
        "name": "cosmoem",
        "order": 790,
        "evolves_from_species_id": 789
      },
      {
        "name": "solgaleo",
        "order": 791,
        "evolves_from_species_id": 790
      },
      {
        "name": "lunala",
        "order": 792,
        "evolves_from_species_id": 790
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "nihilego",
        "order": 793,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "buzzwole",
        "order": 794,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pheromosa",
        "order": 795,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "xurkitree",
        "order": 796,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "celesteela",
        "order": 797,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "kartana",
        "order": 798,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "guzzlord",
        "order": 799,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "necrozma",
        "order": 800,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "magearna",
        "order": 801,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "marshadow",
        "order": 802,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "poipole",
        "order": 803,
        "evolves_from_species_id": null
      },
      {
        "name": "naganadel",
        "order": 804,
        "evolves_from_species_id": 803
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "stakataka",
        "order": 805,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "blacephalon",
        "order": 806,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zeraora",
        "order": 807,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "meltan",
        "order": 808,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "melmetal",
        "order": 809,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "grookey",
        "order": 810,
        "evolves_from_species_id": null
      },
      {
        "name": "thwackey",
        "order": 811,
        "evolves_from_species_id": 810
      },
      {
        "name": "rillaboom",
        "order": 812,
        "evolves_from_species_id": 811
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "scorbunny",
        "order": 813,
        "evolves_from_species_id": null
      },
      {
        "name": "raboot",
        "order": 814,
        "evolves_from_species_id": 813
      },
      {
        "name": "cinderace",
        "order": 815,
        "evolves_from_species_id": 814
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sobble",
        "order": 816,
        "evolves_from_species_id": null
      },
      {
        "name": "drizzile",
        "order": 817,
        "evolves_from_species_id": 816
      },
      {
        "name": "inteleon",
        "order": 818,
        "evolves_from_species_id": 817
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "skwovet",
        "order": 819,
        "evolves_from_species_id": null
      },
      {
        "name": "greedent",
        "order": 820,
        "evolves_from_species_id": 819
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rookidee",
        "order": 821,
        "evolves_from_species_id": null
      },
      {
        "name": "corvisquire",
        "order": 822,
        "evolves_from_species_id": 821
      },
      {
        "name": "corviknight",
        "order": 823,
        "evolves_from_species_id": 822
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "blipbug",
        "order": 824,
        "evolves_from_species_id": null
      },
      {
        "name": "dottler",
        "order": 825,
        "evolves_from_species_id": 824
      },
      {
        "name": "orbeetle",
        "order": 826,
        "evolves_from_species_id": 825
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "nickit",
        "order": 827,
        "evolves_from_species_id": null
      },
      {
        "name": "thievul",
        "order": 828,
        "evolves_from_species_id": 827
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "gossifleur",
        "order": 829,
        "evolves_from_species_id": null
      },
      {
        "name": "eldegoss",
        "order": 830,
        "evolves_from_species_id": 829
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "wooloo",
        "order": 831,
        "evolves_from_species_id": null
      },
      {
        "name": "dubwool",
        "order": 832,
        "evolves_from_species_id": 831
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "chewtle",
        "order": 833,
        "evolves_from_species_id": null
      },
      {
        "name": "drednaw",
        "order": 834,
        "evolves_from_species_id": 833
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "yamper",
        "order": 835,
        "evolves_from_species_id": null
      },
      {
        "name": "boltund",
        "order": 836,
        "evolves_from_species_id": 835
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "rolycoly",
        "order": 837,
        "evolves_from_species_id": null
      },
      {
        "name": "carkol",
        "order": 838,
        "evolves_from_species_id": 837
      },
      {
        "name": "coalossal",
        "order": 839,
        "evolves_from_species_id": 838
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "applin",
        "order": 840,
        "evolves_from_species_id": null
      },
      {
        "name": "flapple",
        "order": 841,
        "evolves_from_species_id": 840
      },
      {
        "name": "appletun",
        "order": 842,
        "evolves_from_species_id": 840
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "silicobra",
        "order": 843,
        "evolves_from_species_id": null
      },
      {
        "name": "sandaconda",
        "order": 844,
        "evolves_from_species_id": 843
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cramorant",
        "order": 845,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "arrokuda",
        "order": 846,
        "evolves_from_species_id": null
      },
      {
        "name": "barraskewda",
        "order": 847,
        "evolves_from_species_id": 846
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "toxel",
        "order": 848,
        "evolves_from_species_id": null
      },
      {
        "name": "toxtricity",
        "order": 849,
        "evolves_from_species_id": 848
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sizzlipede",
        "order": 850,
        "evolves_from_species_id": null
      },
      {
        "name": "centiskorch",
        "order": 851,
        "evolves_from_species_id": 850
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "clobbopus",
        "order": 852,
        "evolves_from_species_id": null
      },
      {
        "name": "grapploct",
        "order": 853,
        "evolves_from_species_id": 852
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "sinistea",
        "order": 854,
        "evolves_from_species_id": null
      },
      {
        "name": "polteageist",
        "order": 855,
        "evolves_from_species_id": 854
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "hatenna",
        "order": 856,
        "evolves_from_species_id": null
      },
      {
        "name": "hattrem",
        "order": 857,
        "evolves_from_species_id": 856
      },
      {
        "name": "hatterene",
        "order": 858,
        "evolves_from_species_id": 857
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "impidimp",
        "order": 859,
        "evolves_from_species_id": null
      },
      {
        "name": "morgrem",
        "order": 860,
        "evolves_from_species_id": 859
      },
      {
        "name": "grimmsnarl",
        "order": 861,
        "evolves_from_species_id": 860
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "milcery",
        "order": 868,
        "evolves_from_species_id": null
      },
      {
        "name": "alcremie",
        "order": 869,
        "evolves_from_species_id": 868
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "falinks",
        "order": 870,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "pincurchin",
        "order": 871,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "snom",
        "order": 872,
        "evolves_from_species_id": null
      },
      {
        "name": "frosmoth",
        "order": 873,
        "evolves_from_species_id": 872
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "stonjourner",
        "order": 874,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "eiscue",
        "order": 875,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "indeedee",
        "order": 876,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "morpeko",
        "order": 877,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "cufant",
        "order": 878,
        "evolves_from_species_id": null
      },
      {
        "name": "copperajah",
        "order": 879,
        "evolves_from_species_id": 878
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dracozolt",
        "order": 880,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "arctozolt",
        "order": 881,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dracovish",
        "order": 882,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "arctovish",
        "order": 883,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "duraludon",
        "order": 884,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "dreepy",
        "order": 885,
        "evolves_from_species_id": null
      },
      {
        "name": "drakloak",
        "order": 886,
        "evolves_from_species_id": 885
      },
      {
        "name": "dragapult",
        "order": 887,
        "evolves_from_species_id": 886
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zacian",
        "order": 888,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zamazenta",
        "order": 889,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "eternatus",
        "order": 890,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "kubfu",
        "order": 891,
        "evolves_from_species_id": null
      },
      {
        "name": "urshifu",
        "order": 892,
        "evolves_from_species_id": 891
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "zarude",
        "order": 893,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "regieleki",
        "order": 894,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "regidrago",
        "order": 895,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "glastrier",
        "order": 896,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "spectrier",
        "order": 897,
        "evolves_from_species_id": null
      }
    ]
  },
  {
    "pokemon_v2_pokemonspecies": [
      {
        "name": "calyrex",
        "order": 898,
        "evolves_from_species_id": null
      }
    ]
  }
]