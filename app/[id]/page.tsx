import Cards from '@/sections/Cards';

export default function RegionId({ params }: { params: { id: number } }) {
  const isNumber = Number(params.id);
  return !isNaN(isNumber) ? (
    <Cards id={params.id} />
  ) : (
    <>MAL PARAMETRO DE URL</>
  );
}
