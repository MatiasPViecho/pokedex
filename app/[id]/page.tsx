import Cards from '@/sections/Cards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'By MViecho',
  icons: {
    icon: '/public/pokeball.svg',
  },
};
export default function RegionId({ params }: { params: { id: number } }) {
  const isNumber = Number(params.id);
  return !isNaN(isNumber) ? (
    <Cards id={params.id} />
  ) : (
    <>MAL PARAMETRO DE URL</>
  );
}
