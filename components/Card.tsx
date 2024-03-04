import React from 'react';
import { IFinalPokemon } from '@/interfaces/interfaces';
import { Icon } from './Icons';
import { IconType } from './IconType';

const Card = ({
  id,
  sprite,
  stats,
  name,
  type,
  second_type,
  height,
  weight,
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
      className={`px-1 pb-8 backdrop-blur-xl min-h-[500px] ml-4 min-w-96  rounded-lg bg-gradient-to-br from-${type} via-65% to-90% ${
        types.includes(type)
          ? `${
              second_type
                ? `from-40%  via-${type}-opaque to-${second_type} `
                : `from-20% via-${type}-opaque to-${type} `
            }`
          : 'bg-slate-500'
      }
      border-[12px] border-gray-300 
      flex flex-col shadow-md max-md:max-w-96`}
    >
      <div
        className={`w-full font-bold uppercase flex items-end bg-gradient-to-r rounded-tl-full border-gray-200/30 border-x-4 border-y-2 rounded-br-full from-${type} from-60% to-${type}-opaque to-70%  px-2 relative`}
      >
        <span className={`text-lg pl-8 flex-1 h-full pr-2`}>{name}</span>
        <div className={`flex gap-1 items-top pr-2`}>
          <span className="text-xs self-end">hp</span>
          <span className="text-2xl">{stats.hp}</span>
          <div
            className={`p-1 w-max max-w-5 max-h-5 mt-1 bg-${type} rounded-full flex justify-center items-center`}
          >
            {types.includes(type) ? <IconType name={type} /> : <></>}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className={`flex w-full justify-center p-4
         ${
           types.includes(type) ? `bg-${type}` : 'bg-white'
         } rounded-b-md relative overflow-hidden border-4 mb-1 border-gray-200/30`}
        >
          <img
            className="w-2/3 h-auto select-none
          "
            src={sprite}
            alt={`${name} pokemon sprite`}
          />
          <div className="absolute w-full h-full top-0 bg-gradient-to-b from-holo-green to-holo-pink to-holo-purple to-holo-blue bg-cover animate-holo blur-xl opacity-35 "></div>
        </div>
        <div className=" flex flex-col gap-2 items-center">
          <p>
            {weight} = peso, {height} = altura
          </p>
          <ul className="grid grid-cols-2 gap-2 *:grid *:justify-end *:items-center *:gap-4 *:grid-cols-[16px_minmax(0px,_2fr)_24px] *:max-w-56">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
