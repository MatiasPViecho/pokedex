import { IFinalPokemon } from '@/interfaces/interfaces';
import { Icon } from './Icons';
export const Card = ({ id, sprite, stats, name }: IFinalPokemon) => {
  return (
    <div className="p-8 backdrop-blur-xl min-h-[400px] ml-4 min-w-96 rounded-sm bg-slate-300 flex flex-col gap-4">
      <div className="flex w-full justify-center p-4 bg-white border-2 rounded-md relative">
        <img
          className="w-2/3 h-auto select-none
          "
          src={sprite}
          alt={`${name} pokemon sprite`}
        />
        <div className="absolute w-full h-full bg-white/30 top-0"></div>
      </div>
      <div className=" font-mono flex flex-col gap-2 items-center">
        <span className="font-semibold text-lg uppercase">{name}</span>
        <ul className="grid grid-cols-2 gap-4 *:flex *:justify-between *w-full *:gap-2">
          <li>
            <span>ATK: </span>
            <span>{stats.attack}</span>
          </li>
          <li>
            <span>DFE: </span>
            <span>{stats.defense}</span>
          </li>
          <li>
            <span>HP: </span>
            <span>{stats.hp}</span>
          </li>
          <li>
            <span>SPK: </span>
            <span>{stats.specialAttack}</span>
          </li>
          <li>
            <span>SPD: </span>
            <span>{stats.specialDefense}</span>
          </li>
          <li>
            <span>SPE: </span>
            <span>{stats.speed}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
