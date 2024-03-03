import { IFinalPokemon } from '@/interfaces/interfaces';
import { Icon } from './Icons';
export const Card = ({ id, sprite, stats, name, type }: IFinalPokemon) => {
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
  console.log('type:', type);
  return (
    <div
      className={`p-8 backdrop-blur-xl min-h-[400px] ml-4 min-w-96  rounded-sm ${
        colours.includes(type) ? `bg-${type}` : 'bg-slate-500'
      } flex flex-col gap-4`}
    >
      <div className="flex w-full justify-center p-4 bg-white rounded-md relative overflow-hidden">
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
        <ul className="grid grid-cols-2 gap-4 *:flex *:justify-between *w-full *:gap-2">
          <li>
            <span>Attack: </span>
            <span>{stats.attack}</span>
          </li>
          <li>
            <span>Defense: </span>
            <span>{stats.defense}</span>
          </li>
          <li>
            <span>HP: </span>
            <span>{stats.hp}</span>
          </li>
          <li>
            <span>Sp. Atk: </span>
            <span>{stats.specialAttack}</span>
          </li>
          <li>
            <span>Sp. Def: </span>
            <span>{stats.specialDefense}</span>
          </li>
          <li>
            <span>Speed: </span>
            <span>{stats.speed}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
