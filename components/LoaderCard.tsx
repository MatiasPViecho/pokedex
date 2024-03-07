import { convertToPokemon } from '@/app/actions';
import { InitialPokemon } from '@/interfaces/interfaces';
import Card from './Card';
import { Suspense } from 'react';

export default async function LoaderCard({
  entry_number,
  pokemon_species,
}: InitialPokemon) {
  const pokemon = await convertToPokemon(pokemon_species.url);
  return (
    <Suspense fallback={<div>loading...</div>}>
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
