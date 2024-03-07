import Cards from '@/sections/Cards';

export default function RegionId({ params }: { params: { id: number } }) {
  const isNumber = Number(params.id);
  console.log('isNumber:', isNumber);
  return !isNaN(isNumber) ? (
    <Cards id={params.id} />
  ) : (
    <>MAL PARAMETRO DE URL</>
  );
}
