'use client';
import { getPokemons } from '@/app/actions';
import Card from '@/components/Card';
import { Draggable } from '@/helpers/Draggable';
import { IFinalPokemon, IError } from '@/interfaces/interfaces';
import { useState, useEffect } from 'react';
export const Cards = () => {
  const [cards, setCards] = useState<IFinalPokemon[]>([]);
  const [error, setError] = useState<string>();
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  useEffect(() => {
    getPokemons().then((e: IFinalPokemon[] | IError) => {
      console.log('e:', e);
      if (!('ok' in e)) {
        setCards(e);
      } else {
        setError(e.message);
      }
    });
  }, []);

  return !error ? (
    <Draggable
      rootClass={''}
      handleStartGrabbing={() => setIsGrabbing(true)}
      handleStopGrabbing={() => setIsGrabbing(false)}
    >
      <ul
        className={`flex p-8 gap-4 *:select-none overflow-x-scroll w-full min-w-[768px] ${
          isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {cards.map((card) => (
          <li
            key={card.id}
            className="snap-start snap-always flex-shrink-0"
          >
            <Card
              sprite={card.sprite}
              stats={card.stats}
              name={card.name}
              id={card.id}
              type={card.type}
            />
          </li>
        ))}
      </ul>
    </Draggable>
  ) : (
    <div>Ocurrió un error</div>
  );
};
