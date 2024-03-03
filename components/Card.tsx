import React from 'react';
import { IFinalPokemon } from '@/interfaces/interfaces';
import { Icon } from './Icons';
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
  const colours: string[] = [
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
      className={`p-8 backdrop-blur-xl min-h-[500px] ml-4 min-w-96  rounded-lg ${
        colours.includes(type)
          ? `${
              second_type
                ? `bg-gradient-to-br from-${type}-opaque from-50% to-${second_type}-opaque to-70%`
                : `bg-${type}-opaque`
            }`
          : 'bg-slate-500'
      }
      border-[12px] border-gray-300 
      flex flex-col gap-4 shadow-md max-md:max-w-96`}
    >
      <div
        className={`flex w-full justify-center p-4
         ${
           colours.includes(type) ? `bg-${type}` : 'bg-white'
         } rounded-md relative overflow-hidden`}
      >
        <img
          className="w-2/3 h-auto select-none
          "
          src={sprite}
          alt={`${name} pokemon sprite`}
        />
        <div className="absolute w-full h-full top-0 bg-gradient-to-b from-holo-green to-holo-pink to-holo-purple to-holo-blue bg-cover animate-holo blur-xl opacity-35 "></div>
      </div>
      <div className=" font-mono flex flex-col gap-2 items-center">
        <span className="font-semibold text-lg uppercase">{name}</span>
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
  );
};

export default React.memo(Card);
