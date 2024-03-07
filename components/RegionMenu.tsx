import { Draggable } from '@/helpers/Draggable';
import { MenuUl } from './Menu';
import { IRegion, regions } from '@/helpers/Regions';
import { RegionLink } from './RegionLink';
export const RegionMenu = () => {
  return (
    <Draggable rootClass={'w-full flex'}>
      <MenuUl
        classes="flex w-full overflow-x-scroll no-scrollbar"
        column={false}
      >
        {regions.map((region: IRegion, i: number) => (
          <RegionLink
            name={region.name}
            id={region.id}
            key={region.id}
          />
        ))}
      </MenuUl>
    </Draggable>
  );
};
