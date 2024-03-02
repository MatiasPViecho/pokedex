'use client';
import { getPokemons } from '@/app/actions';
import { Card } from '@/components/Card';
import { IFinalPokemon, IError } from '@/interfaces/interfaces';
import { useState, useEffect } from 'react';
export const Cards = () => {
  const [cards, setCards] = useState<IFinalPokemon[]>([]);
  const [error, setError] = useState<string>();
  useEffect(() => {
    getPokemons().then((e: IFinalPokemon[] | IError) => {
      if (!('ok' in e)) {
        setCards(e);
      } else {
        setError(e.message);
      }
    });
  }, []);

  return (
    <section>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Card
              sprite={card.sprite}
              stats={card.stats}
              name={card.name}
              id={card.id}
            />
          </li>
        ))}
      </ul>
      {error ? <div>Ocurrió un error</div> : <></>}
    </section>
  );
};
