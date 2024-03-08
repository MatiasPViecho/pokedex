import { Cards } from '@/sections/Cards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'By MViecho',
  icons: {
    icon: '/public/pokeball.svg',
  },
};

export default function Page() {
  return <Cards id={1} />;
}
