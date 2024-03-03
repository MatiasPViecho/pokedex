'use server';
import { IFinalPokemon, IPokemonGroup, IError } from '@/interfaces/interfaces';
const API_URL: string = process.env.NEXT_PUBLIC_API_URL || '';
const Error = (msg: string, code: number): IError => {
  return { message: msg, code: code, ok: false };
};

export const getPokemons = async () => {
  try {
    const res = await fetch(`${API_URL}/pokemon?offset=0&limit=151`, {
      cache: 'force-cache',
    });

    const json = await res.json();
    const finalPokemonArray: IFinalPokemon[] = [];
    if (json.results) {
      const pokemonPromises = json.results.map(
        async (element: IPokemonGroup) => {
          const jsonPokemon = await getPokemon(element.url);
          if (jsonPokemon) {
            return convertToPokemon(jsonPokemon);
          }
        }
      );
      await Promise.all(pokemonPromises).then((pokemonArray) => {
        finalPokemonArray.push(...pokemonArray.filter((pokemon) => pokemon));
      });
      return finalPokemonArray;
    }
    return Error('Bad fetch', 400);
  } catch (e) {
    console.error(e);
    return Error('An error ocurred', 500);
  }
};

export const getPokemon = async (url: string) => {
  const res = await fetch(url, { cache: 'force-cache' });
  const json = await res.json();
  return json;
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
    type: '',
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
  finalPokemon.type = jsonPokemon.types[0].type.name;
  return finalPokemon;
}
