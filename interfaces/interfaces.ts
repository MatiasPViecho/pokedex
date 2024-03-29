export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}
interface PokemonSpecies {
  name: string;
  url: string;
}
export interface InitialPokemon {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}
export interface IFinalPokemon {
  name: string;
  sprite: string;
  sprite_shiny: string;
  stats: IStats;
  id: number;
  type: string;
  second_type: string | null;
  weight: number;
  height: number;
  legacy_cry: string | null;
  flavor_text: IFlavor;
  base_happiness: number;
}

export interface IFlavor {
  es: string;
  en: string;
}
export interface IPokemonGroup {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
}

export interface IError {
  message: string;
  code: number;
  ok: boolean;
}
