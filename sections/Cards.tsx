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
    <Draggable rootClass={'max-w-full w-full'}>
      <ul
        className={`no-scrollbar justify-start flex py-8 px-2 gap-4 *:select-none overflow-x-scroll w-full sm:grid sm:grid-flow-col md:grid-rows-3
          active:cursor-grabbing  cursor-grab sm:py-2 sm:px-6 sm:flex-1 mx-auto sm:max-h-max
          md:pl-[20%] `}
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
