import { getPokemons } from '@/app/actions';
import Card from '@/components/Card';
import { Draggable } from '@/helpers/Draggable';
import { IFinalPokemon, IError } from '@/interfaces/interfaces';
export const Cards = () => {
  return getPokemons(1).then((e: IFinalPokemon[] | IError) => (
    <Draggable rootClass={''}>
      <ul
        className={`flex p-8 gap-4 *:select-none overflow-x-scroll w-full min-w-[768px]
         active:cursor-grabbing  cursor-grab
        `}
      >
        {Array.isArray(e) &&
          e.map((card: IFinalPokemon) => (
            <li
              key={card.id}
              className="snap-start snap-always flex-shrink-0"
            >
              <Card
                sprite={card.sprite}
                stats={card.stats}
                name={card.name}
                id={card.id}
                type={card.type}
                second_type={card.second_type}
              />
            </li>
          ))}
      </ul>
    </Draggable>
  ));
};
