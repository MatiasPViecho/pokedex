import { getPokemons } from '@/app/actions';
import Card from '@/components/Card';
import { Draggable } from '@/helpers/Draggable';
import { IFinalPokemon, IError } from '@/interfaces/interfaces';
export const Cards = () => {
  return getPokemons(1).then((e: IFinalPokemon[] | IError) => (
    <Draggable rootClass={''}>
      <ul
        className={`flex py-8 px-2 gap-4 *:select-none overflow-x-scroll w-full flex-wrap sm:grid sm:grid-flow-col sm:grid-rows-2 md:grid-rows-3
         active:cursor-grabbing  cursor-grab
        `}
      >
        {Array.isArray(e) &&
          e.map((card: IFinalPokemon) => (
            <li
              key={card.id}
              className="snap-start snap-always flex-shrink-0 sm:max-w-72 sm:max-h-80 md:max-w-80 md:max-h-96"
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
                base_happiness={card.base_happiness}
                flavor_text={card.flavor_text}
              />
            </li>
          ))}
      </ul>
    </Draggable>
  ));
};
