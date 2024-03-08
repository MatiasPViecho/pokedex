import { convertToPokemon } from '@/app/actions';
import { IFinalPokemon, InitialPokemon } from '@/interfaces/interfaces';
import Card from './Card';
import { Suspense } from 'react';

const CardSkeleton = () => (
  <li className="flex-shrink-0 sm:max-w-72 sm:max-h-[300px]">
    <div className="min-h-96 max-h-96 max-w-80 min-w-80 sm:min-h-[300px] sm:max-h-[300px] sm:max-w-72 sm:min-w-72 rounded-lg border-stone-800 animate-pulse max-md:max-w-96"></div>
  </li>
);
export default async function LoaderCard({ pokemon_species }: InitialPokemon) {
  const pokemonPromise: Promise<IFinalPokemon> = new Promise(
    (resolve, reject) => {
      convertToPokemon(pokemon_species.url)
        .then((response) => {
          if (!response) {
            reject(new Error('Ocurrió un error'));
          }
          return response;
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    }
  );
  return pokemonPromise
    .then((pokemon) => {
      return (
        <Suspense fallback={<CardSkeleton />}>
          <Card
            sprite={pokemon.sprite}
            stats={pokemon.stats}
            name={pokemon.name}
            id={pokemon.id}
            type={pokemon.type}
            second_type={pokemon.second_type}
            weight={pokemon.weight}
            height={pokemon.height}
            sprite_shiny={pokemon.sprite_shiny}
            legacy_cry={pokemon.legacy_cry}
            base_happiness={pokemon.base_happiness}
            flavor_text={pokemon.flavor_text}
          />
        </Suspense>
      );
    })
    .catch((error) => {
      console.error(error);
      return <CardSkeleton />;
    });
}
