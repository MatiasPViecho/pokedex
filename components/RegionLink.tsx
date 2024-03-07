import Link from 'next/link';
interface IRegionProps {
  name: string;
  id: number;
  path: string;
}
export const RegionLink = ({ name, id, path }: IRegionProps) => {
  const noChildPath = path === '/';
  const pathWithouthSlash: string = path && path.replace('/', '');
  return (
    <li
      className={`p-1 ml-3 min-w-40 md:min-w-20 lg:min-w-40 text-sm cursor-pointer uppercase text-center border rounded-md border-stone-900 ${
        (noChildPath && id === 1) || pathWithouthSlash == id.toString()
          ? 'bg-stone-700 text-white border-white'
          : 'bg-white border-white'
      }`}
    >
      <Link
        className="pointer-events-auto w-full z-50 block"
        href={`${id}`}
        prefetch={false}
      >
        {name}
      </Link>
    </li>
  );
};
