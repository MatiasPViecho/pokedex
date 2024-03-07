import { Draggable } from '@/helpers/Draggable';
import { MenuUl } from './Menu';

export const RegionMenu = () => {
  return (
    <Draggable rootClass={'bg-white w-full rounded-sm flex'}>
      <MenuUl
        classes="flex w-full"
        column={false}
      >
        <li className="flex-shrink">
          <h1>Pokedex</h1>
        </li>
        <li>
          <a
            href="https://github.com/MatiasPViecho/pokedex"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>Regions</li>
      </MenuUl>
    </Draggable>
  );
};
