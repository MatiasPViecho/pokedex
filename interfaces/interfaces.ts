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
}

export interface IPokemonGroup {
  name: string;
  url: string;
}

export interface IError {
  message: string;
  code: number;
  ok: boolean;
}
