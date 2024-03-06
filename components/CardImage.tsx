/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useCallback } from 'react';

interface ICardImage {
  type: string | null;
  name: string;
  sprite: string;
  sprite_shiny: string;
}
export const CardImage = ({ type, name, sprite, sprite_shiny }: ICardImage) => {
  const [isShiny, setIsShiny] = React.useState(false);
  const handleClick = useCallback(() => {
    setIsShiny(!isShiny);
  }, [isShiny]);
  return (
    <div
      className={`flex w-full justify-center p-4
         ${
           type ? `bg-${type}` : 'bg-white'
         } rounded-b-md relative overflow-hidden border-4 border-gray-700/30`}
    >
      <img
        className="w-2/3 sm:w-1/3 h-auto select-none
          "
        src={isShiny ? sprite_shiny : sprite}
        alt={`${name} pokemon sprite`}
      />
      <div className="absolute w-full h-full top-0 bg-gradient-to-b  from-holo-green to-holo-pink to-holo-purple to-holo-blue bg-cover animate-holo blur-xl opacity-35 "></div>
      <button
        className="w-6 h-6 rounded-full bg-slate-600 absolute top-5 right-5 z-[999] select-all"
        onClick={() => handleClick()}
      >
        <img
          className="w-full h-auto select-none"
          src={isShiny ? sprite : sprite_shiny}
          alt={`${name} versión shiny`}
        />
      </button>
    </div>
  );
};

export default React.memo(CardImage);
