import { convertToPokemon } from '@/app/actions';
import { InitialPokemon } from '@/interfaces/interfaces';
import Card from './Card';
import { Suspense } from 'react';

const CardSkeleton = () => (
  <div className="min-h-96 max-h-96 max-w-80 min-w-80 sm:min-h-[300px] sm:max-h-[300px] sm:max-w-72 sm:min-w-72 rounded-lg border-stone-800 animate-pulse max-md:max-w-96"></div>
);
export default async function LoaderCard({
  entry_number,
  pokemon_species,
}: InitialPokemon) {
  const pokemon = await convertToPokemon(pokemon_species.url);
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
}
