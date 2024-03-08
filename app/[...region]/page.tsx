import { regions } from '@/helpers/Regions';
import Cards from '@/sections/Cards';
import type { Metadata, ResolvingMetadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Pokedex',
//   description: 'By MViecho',
//   icons: {
//     icon: '/public/pokeball.svg',
//   },
// };
type Props = {
  params: { region?: string[] };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!params.region || typeof params.region === 'undefined')
    return {
      title: 'Pokedex',
    };

  const region = params.region[0];
  const subregion = params.region.length > 1 ? params.region[1] : null;
  return {
    title: subregion ? `${region}|${subregion}` : `${region}`,
  };
}

export async function generateStaticParams() {
  return [
    { region: ['kanto'] },
    { region: ['johto'] },
    { region: ['hoenn'] },
    { region: ['sinnoh'] },
    { region: ['unova'] },
    { region: ['johto', 'updated'] },
    { region: ['sinnoh', 'extended'] },
    { region: ['unova', 'updated'] },
  ];
}
export default function RegionId({
  params,
}: {
  params: { region?: string[] };
}) {
  if (!params || !params.region) return <Cards id={1} />;
  const region = params.region[0];
  const subregion = params.region.length > 1 ? params.region[1] : null;
  const search = subregion ? `/${region}/${subregion}` : `/${region}`;
  const regionExists = regions.find((value) => value.href == search);
  return regionExists ? <Cards id={regionExists.id} /> : <>404</>;
}
