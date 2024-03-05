import React from 'react';
import { IFinalPokemon } from '@/interfaces/interfaces';
import { Icon } from './Icons';
import { formatNumber } from '@/helpers/FormatNumber';
import CardHeader from './CardHeader';
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
      className={`px-1 pb-8 backdrop-blur-xl min-h-96 ml-4 min-w-80 rounded-lg bg-gradient-to-br from-${type} via-65% to-90% ${
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
      <div className="flex flex-col">
        <div
          className={`flex w-full justify-center p-4
         ${
           types.includes(type) ? `bg-${type}` : 'bg-white'
         } rounded-b-md relative overflow-hidden border-4 border-gray-700/30`}
        >
          <img
            className="w-2/3 h-auto select-none
          "
            src={sprite}
            alt={`${name} pokemon sprite`}
          />
          <div className="absolute w-full h-full top-0 bg-gradient-to-b  from-holo-green to-holo-pink to-holo-purple to-holo-blue bg-cover animate-holo blur-xl opacity-35 "></div>
        </div>
        <div className="w-11/12 mx-auto text-sm gap-4 flex justify-center p-1 border-gray-800 bg-gray-700 border-x-4 border-y-2 rounded-full rounded-tr-[3500px] rounded-bl-[3500px] -mt-8 z-50 relative before:absolute before:content-[''] before:h-full before:w-2 before:top-0 before:bg-gray-200/30 before:animate-shine overflow-hidden before:-left-16">
          <span>NO. {formatNumber(id)}</span>
          <span>HT: {height}&quot;</span>
          <span>WT: {weight} lbs</span>
        </div>
        <div
          className={`mx-auto mt-4 max-w-[38ch] text-[0.75rem] font-semibold text-black`}
        >
          {<p>{flavor_text.es}</p> || <p>{flavor_text.en}</p>}
          {/*   <ul className="grid grid-cols-2 gap-2 *:grid *:justify-end *:items-center *:gap-4 *:grid-cols-[16px_minmax(0px,_2fr)_24px] *:max-w-56">
            <li>
              {Icon.Sword}
              <span className="col-start-2">Attack: </span>
              <span className="col-start-3">{stats.attack}</span>
            </li>
            <li>
              {Icon.Shield}
              <span className="col-start-2">Defense: </span>
              <span className="col-start-3">{stats.defense}</span>
            </li>
            <li>
              <span className="col-start-2">Sp. Atk: </span>
              <span className="col-start-3">{stats.specialAttack}</span>
            </li>
            <li>
              <span className="col-start-2">Sp. Def: </span>
              <span className="col-start-3">{stats.specialDefense}</span>
            </li>
            <li>
              {Icon.Heart}
              <span className="col-start-2">HP: </span>
              <span className="col-start-3">{stats.hp}</span>
            </li>
            <li>
              {Icon.Boot}
              <span className="col-start-2">Speed: </span>
              <span className="col-start-3">{stats.speed}</span>
            </li>
          </ul>*/}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
