'use server';
import { IFinalPokemon, IPokemonGroup, IError } from '@/interfaces/interfaces';
const API_URL: string = process.env.NEXT_PUBLIC_API_URL || '';
const Error = (msg: string, code: number): IError => {
  return { message: msg, code: code, ok: false };
};

export const getPokemons = async () => {
  try {
    const res = await fetch(`${API_URL}/pokemon?offset=0&limit=20`, {
      cache: 'force-cache',
    });
    const json = await res.json();
    const finalPokemonArray: IFinalPokemon[] = [];
    if (json.results) {
      json.results.forEach(async (element: IPokemonGroup) => {
        const resPokemon = await fetch(element.url, { cache: 'force-cache' });
        const jsonPokemon = await resPokemon.json();
        if (jsonPokemon) {
          const finalPokemon: IFinalPokemon = convertToPokemon(jsonPokemon);
          finalPokemonArray.push(finalPokemon);
        }
      });
    }
    return finalPokemonArray;
  } catch (e) {
    console.error(e);
    return Error('An error ocurred', 500);
  }
};

export const getPokemon = async (id: number) => {
  const res = await fetch(`${API_URL}/pokemon/${id}`, { cache: 'force-cache' });
  const json = await res.json();
};

function convertToPokemon(jsonPokemon: any) {
  const finalPokemon: IFinalPokemon = {
    name: '',
    sprite: '',
    id: 0,
    stats: {
      attack: 0,
      defense: 0,
      hp: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
  };
  finalPokemon.name = jsonPokemon.name || 'unkown';
  finalPokemon.sprite = jsonPokemon.sprites?.front_default || '';
  finalPokemon.stats.hp = jsonPokemon.stats[0]?.base_stat || 0;
  finalPokemon.stats.attack = jsonPokemon.stats[1]?.base_stat || 0;
  finalPokemon.stats.defense = jsonPokemon.stats[2]?.base_stat || 0;
  finalPokemon.stats.specialAttack = jsonPokemon.stats[3]?.base_stat || 0;
  finalPokemon.stats.specialDefense = jsonPokemon.stats[4]?.base_stat || 0;
  finalPokemon.stats.speed = jsonPokemon.stats[5]?.base_stat || 0;
  finalPokemon.id = jsonPokemon.id;
  return finalPokemon;
}
