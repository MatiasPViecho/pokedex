'use client';
import { IRegion } from '@/helpers/Regions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export const RegionLink = ({ name, id }: IRegion) => {
  const path = usePathname();
  const noChildPath = path === '/';
  const pathWithouthSlash: string = path && path.replace('/', '');
  return (
    <li
      className={`p-1 min-w-40 text-sm cursor-pointer text-uppercase text-center font-bold  border rounded-md border-stone-900 ${
        (noChildPath && id === 1) || pathWithouthSlash == id.toString()
          ? 'bg-stone-900 text-white'
          : 'bg-white'
      }`}
    >
      <Link
        className="pointer-events-auto select-none w-full"
        href={`${id}`}
      >
        {name}
      </Link>
    </li>
  );
};
