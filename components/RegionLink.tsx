import Link from 'next/link';
interface IRegionProps {
  name: string;
  id: number;
  path: string;
  href: string;
}
export const RegionLink = ({ name, id, path, href }: IRegionProps) => {
  const noChildPath = path === '/';

  return (
    <li className="ml-3">
      <Link
        className={`pointer-events-auto w-full z-50 block p-1 min-w-40 md:min-w-20 lg:min-w-40 text-sm cursor-pointer uppercase text-center border rounded-md border-stone-900 ${
          (noChildPath && id === 1) || path == href.toString()
            ? 'bg-stone-700 text-white border-white'
            : 'bg-white border-white'
        }`}
        href={`${href}`}
        prefetch={false}
      >
        {name}
      </Link>
    </li>
  );
};
