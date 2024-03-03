export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}
export interface IFinalPokemon {
  name: string;
  sprite: string;
  stats: IStats;
  id: number;
  type: string;
  second_type: string | null;
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
