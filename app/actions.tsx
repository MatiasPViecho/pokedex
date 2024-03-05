'use server';
import { IFinalPokemon, IPokemonGroup, IError } from '@/interfaces/interfaces';
const API_URL: string = process.env.NEXT_PUBLIC_API_URL || '';
const Error = (msg: string, code: number): IError => {
  return { message: msg, code: code, ok: false };
};
const footBase: number = 3.28084;
const poundsBase: number = 2.20462;
export const getPokemons = async (gen: number) => {
  try {
    const res = await fetch(`${API_URL}/pokedex/${gen + 1}`, {
      cache: 'force-cache',
    });

    const json = await res.json();
    const finalPokemonArray: IFinalPokemon[] = [];
    if (json.pokemon_entries) {
      const pokemonPromises = json.pokemon_entries.map(
        async (element: IPokemonGroup) => {
          const newUrl = element.pokemon_species.url.replace('-species', '');
          const jsonPokemon = await getPokemon(newUrl);
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
    second_type: null,
    height: 0,
    weight: 0,
    sprite_shiny: '',
    legacy_cry: null,
  };
  finalPokemon.name = jsonPokemon.name || 'unkown';
  finalPokemon.sprite = jsonPokemon.sprites?.front_default || '';
  finalPokemon.sprite_shiny = jsonPokemon.sprites?.front_shiny || '';
  finalPokemon.stats.hp = jsonPokemon.stats[0]?.base_stat || 0;
  finalPokemon.stats.attack = jsonPokemon.stats[1]?.base_stat || 0;
  finalPokemon.stats.defense = jsonPokemon.stats[2]?.base_stat || 0;
  finalPokemon.stats.specialAttack = jsonPokemon.stats[3]?.base_stat || 0;
  finalPokemon.stats.specialDefense = jsonPokemon.stats[4]?.base_stat || 0;
  finalPokemon.stats.speed = jsonPokemon.stats[5]?.base_stat || 0;
  finalPokemon.id = jsonPokemon.id;
  finalPokemon.type = jsonPokemon.types[0].type.name;
  finalPokemon.second_type =
    jsonPokemon.types.length > 1 ? jsonPokemon.types[1].type.name : null;
  finalPokemon.height = convertHeightToFoot(unitConvertUp(jsonPokemon.height));
  finalPokemon.weight = roundDecimal(
    convertKgsToLbs(unitConvertUp(jsonPokemon.weight))
  );
  finalPokemon.legacy_cry = jsonPokemon.cries.legacy;
  return finalPokemon;
}

const unitConvertUp = (unit: number) => {
  return unit / 10;
};
const convertHeightToFoot = (height: number) => {
  return Math.ceil(height * footBase * 10) / 10; // Round up the last decimal
};
const convertKgsToLbs = (kgs: number) => {
  return kgs * poundsBase;
};
function roundDecimal(number: number): number {
  return parseFloat(number.toFixed(1));
}
