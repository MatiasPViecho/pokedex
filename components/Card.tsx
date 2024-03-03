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
      flex flex-col shadow-md max-md:max-w-96`}
    >
      <div className="w-full font-bold uppercase flex items-center">
        <span className="text-lg flex-1 border-r-4 border-gray-200 mr-2">
          {name}
        </span>
        <div className="flex gap-1 items-end">
          <span className="text-xs">hp</span>
          <span className="text-2xl">{stats.hp}</span>
          <div
            className={`p-2 w-max bg-${type} rounded-full flex justify-center items-center`}
          >
            <svg
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m97.4121 440.649c-1.7574-1.653-3.4954-3.338-5.2132-5.056-90.68455-90.684-90.68453-237.713 0-328.397 90.6841-90.6849 379.6401-96.7516 379.6401-96.7516s39.442 334.4646-51.242 425.1486c-80.54 80.54-205.522 89.55-296.005 27.031l72.908-89.471 116.55-25.163-95.139-9.511 60.462-61.562 68.824-15.077-54.422-16.117 54.422-98.176-77.41 86.828-29.893-42.183 10.523 69.648-53.917 60.782-24.993-76.9v102.268z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className={`flex w-full justify-center p-4
         ${
           colours.includes(type) ? `bg-${type}` : 'bg-white'
         } rounded-md relative overflow-hidden border-4 my-1 border-gray-200/30`}
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
