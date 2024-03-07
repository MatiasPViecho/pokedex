import Cards from '@/sections/Cards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokedex | Kanto',
  description: 'By MViecho',
  icons: {
    icon: '/public/pokeball.svg',
  },
};
export default function RegionId() {
  return <Cards id={2} />;
}
