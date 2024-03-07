import { regions } from '@/helpers/Regions';
import Cards from '@/sections/Cards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'By MViecho',
  icons: {
    icon: '/public/pokeball.svg',
  },
};
export default function RegionId({ params }: { params: { region: string } }) {
  const region = regions.find((value) => value.href == '/' + params.region);
  return region ? <Cards id={region.id} /> : <>404</>;
}
