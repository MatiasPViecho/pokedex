import React, { Suspense } from 'react';
import { getPokemons } from '@/app/actions';
import { Draggable } from '@/helpers/Draggable';
import { IError, InitialPokemon } from '@/interfaces/interfaces';
import LoaderCard from '@/components/LoaderCard';
import { CardsLoader } from '@/components/CardsLoader';
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
            <li
              key={card.entry_number}
              className="flex-shrink-0 sm:max-w-72 sm:max-h-[300px]"
            >
              <LoaderCard
                entry_number={card.entry_number}
                pokemon_species={card.pokemon_species}
              />
            </li>
          ))}
      </ul>
    </Draggable>
  );
}
export default React.memo(Cards);
