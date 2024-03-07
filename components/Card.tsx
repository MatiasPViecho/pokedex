import React from 'react';
import { IFinalPokemon } from '@/interfaces/interfaces';
import { formatNumber } from '@/helpers/FormatNumber';
import CardHeader from './CardHeader';
import { CardImage } from './CardImage';
const Card = ({
  id,
  sprite,
  stats,
  name,
  type,
  second_type,
  height,
  weight,
  base_happiness,
  flavor_text,
  legacy_cry,
  sprite_shiny,
}: IFinalPokemon) => {
  const types: string[] = [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
  ];
  return (
    <div
      className={`box-border backdrop-blur-xl min-h-96 max-h-96 max-w-80 min-w-80 sm:min-h-[300px] sm:max-h-[300px] sm:max-w-72 sm:min-w-72 rounded-lg bg-gradient-to-br from-${type} via-65% to-90% ${
        types.includes(type)
          ? `${
              second_type
                ? `from-40%  via-${type}-opaque to-${second_type} `
                : `from-20% via-${type}-opaque to-${type} `
            }`
          : 'bg-slate-500'
      }
      border-[12px] border-stone-700 
      flex flex-col shadow-md max-md:max-w-96`}
    >
      <CardHeader
        hp={stats.hp}
        name={name}
        type={types.includes(type) ? type : null}
      />
      <CardImage
        type={types.includes(type) ? type : null}
        name={name}
        sprite={sprite}
        sprite_shiny={sprite_shiny}
      />
      <div className="w-11/12 mx-auto text-sm md:text-xs gap-4 flex justify-center p-1 border-gray-800 bg-gray-700 border-x-4 border-y-2 rounded-full rounded-tr-[3500px] rounded-bl-[3500px] -mt-8 z-50 relative before:absolute before:content-[''] before:h-full before:w-2 before:top-0 before:bg-gray-200/30 before:animate-shine overflow-hidden before:-left-16">
        <span>NO. {formatNumber(id)}</span>
        <span>HT: {height}&quot;</span>
        <span>WT: {weight} lbs</span>
      </div>
      <div
        className={`px-1 w-full pt-4  bg-gradient-to-br from-white/30 from-0% via-white/25 via-10% to-transparent h-full to-40%  `}
      >
        <span className="max-w-[38ch] whitespace-break-spaces tracking-wide text-black italic text-balance text-[0.75rem] sm:whitespace-normal sm:line-clamp-3">
          {flavor_text.es || flavor_text.en}
        </span>
      </div>
    </div>
  );
};

export default React.memo(Card);
