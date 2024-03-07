import React from 'react';
import { getPokemons } from '@/app/actions';
import { Draggable } from '@/helpers/Draggable';
import { IError, InitialPokemon } from '@/interfaces/interfaces';
import LoaderCard from '@/components/LoaderCard';
interface ICardsProps {
  id: number;
}
const Cards = ({ id }: ICardsProps) => {
  return getPokemons(id).then((e: InitialPokemon[] | IError) => (
    <Draggable rootClass={'h-full max-w-full w-full'}>
      <ul
        className={`no-scrollbar h-full flex py-8 px-2 gap-4 *:select-none overflow-x-scroll w-full sm:h-full sm:grid sm:grid-flow-col sm:grid-rows-2 md:grid-rows-3
         active:cursor-grabbing  cursor-grab sm:py-2 sm:px-6 sm:flex-1 mx-auto sm:max-h-max
        `}
      >
        {Array.isArray(e) &&
          e.map((card: InitialPokemon) => (
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
  ));
};
export default React.memo(Cards);
