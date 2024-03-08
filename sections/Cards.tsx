import React from 'react';
import { getPokemons } from '@/app/actions';
import { Draggable } from '@/helpers/Draggable';
import { IError, InitialPokemon } from '@/interfaces/interfaces';
import LoaderCard from '@/components/LoaderCard';
interface ICardsProps {
  id: number;
}
export async function Cards({ id }: ICardsProps) {
  const cards: InitialPokemon[] | IError = await getPokemons(id);
  return (
    <Draggable rootClass={'h-full max-w-full w-full'}>
      <ul
        className={`no-scrollbar h-full flex py-8 px-2 gap-4 *:select-none overflow-x-scroll w-full sm:h-full sm:grid sm:grid-flow-col sm:grid-rows-2 md:grid-rows-3
          active:cursor-grabbing  cursor-grab sm:py-2 sm:px-6 sm:flex-1 mx-auto sm:max-h-max
          `}
      >
        {Array.isArray(cards) &&
          cards.map((card: InitialPokemon) => (
            <LoaderCard
              key={card.entry_number}
              entry_number={card.entry_number}
              pokemon_species={card.pokemon_species}
            />
          ))}
      </ul>
    </Draggable>
  );
}
export default React.memo(Cards);
