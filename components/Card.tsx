import { IFinalPokemon } from '@/interfaces/interfaces';

export const Card = ({ id, sprite, stats, name }: IFinalPokemon) => {
  return (
    <div>
      <img
        src={sprite}
        alt={`${name} pokemon sprite`}
      />
    </div>
  );
};
