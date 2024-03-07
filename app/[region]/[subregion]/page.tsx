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
export default function RegionId({
  params,
}: {
  params: { region: string; subregion: string };
}) {
  const region = regions.find((value) => {
    return value.href == '/' + params.region + '/' + params.subregion;
  });
  return region ? <Cards id={region.id} /> : <>404</>;
}
