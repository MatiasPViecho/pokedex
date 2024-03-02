import { IFinalPokemon } from '@/interfaces/interfaces';
import { Icon } from './Icons';
export const Card = ({ id, sprite, stats, name }: IFinalPokemon) => {
  return (
    <div className="p-8 backdrop-blur-xl min-h-96 min-w-80 rounded-sm bg-slate-800/30 ">
      <div className="flex w-full justify-center p-4 bg-white">
        <img
          src={sprite}
          alt={`${name} pokemon sprite`}
        />
      </div>
      <div className=" font-mono flex flex-col gap-2 items-center">
        <span className="font-semibold text-lg uppercase">{name}</span>
        <ul className="grid grid-cols-2 gap-4">
          <li>ATK: {stats.attack}</li>
          <li>DFE: {stats.defense}</li>
          <li>HP: {stats.hp}</li>
          <li>SPK: {stats.specialAttack}</li>
          <li>SPD: {stats.specialDefense}</li>
          <li>SPE: {stats.speed}</li>
        </ul>
      </div>
    </div>
  );
};
