import { MenuUl } from './Menu';
import { IRegion, regions } from '@/helpers/Regions';
import { RegionLink } from './RegionLink';
interface IRegionMenuProps {
  path: string;
}
export const RegionMenu = ({ path }: IRegionMenuProps) => {
  return (
    <MenuUl
      classes="flex w-full md:flex-col md:gap-2 overflow-x-scroll no-scrollbar"
      column={false}
    >
      <li className="hidden md:block md:text-base text-black uppercase pb-1">
        Choose Region:
      </li>
      {regions.map((region: IRegion) => (
        <RegionLink
          name={region.name}
          href={region.href}
          id={region.id}
          key={region.id}
          path={path}
        />
      ))}
    </MenuUl>
  );
};
