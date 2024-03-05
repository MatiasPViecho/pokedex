import { getPokemons } from '@/app/actions';
import Card from '@/components/Card';
import { Draggable } from '@/helpers/Draggable';
import { IFinalPokemon, IError } from '@/interfaces/interfaces';
export const Cards = () => {
  return getPokemons(1).then((e: IFinalPokemon[] | IError) => (
    <Draggable rootClass={''}>
      <ul
        className={`flex py-8 px-2 gap-4 *:select-none overflow-x-scroll w-full md:min-w-[768px]
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
                weight={card.weight}
                height={card.height}
                sprite_shiny={card.sprite_shiny}
                legacy_cry={card.legacy_cry}
              />
            </li>
          ))}
      </ul>
    </Draggable>
  ));
};
