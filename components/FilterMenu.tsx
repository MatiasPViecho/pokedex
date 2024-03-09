import { ChangeEvent } from 'react';
import { MenuUl } from './Menu';
import { create } from 'zustand';
import { typeEnum, types } from '@/helpers/Types';
import { IconType } from './IconType';
interface FilterState {
  name: string;
  type: string | null;
  change: (by: string) => void;
  changeType: (by: string | null) => void;
}
export const useFilterStore = create<FilterState>((set) => ({
  name: '',
  type: null,
  change: (by: string) => set((state) => ({ name: by })),
  changeType: (newType: string | null) => set((state) => ({ type: newType })),
}));
export const FilterMenu = () => {
  const { name, type, change, changeType } = useFilterStore();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (name.length > 20 && name.length < value.length) {
      return;
    }
    if (e.target.value.length > 21) {
      change(e.target.value.slice(0, 20));
    } else {
      change(e.target.value);
    }
  };
  const handleTypeChange = (e: string) => {
    if (e === type) {
      changeType(null);
    } else {
      changeType(e);
    }
  };
  return (
    <div className="flex flex-col gap-4 md:align-center">
      <input
        className="bg-white rounded-sm md:mx-auto px-2 mr-auto py-3 text-black shadow-sm"
        placeholder="Search Pokemon..."
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <MenuUl
        classes="rounded-sm w-full overflow-x-scroll no-scrollbar md:grid md:grid-cols-3  gap-1 md:gap-2"
        column={false}
      >
        {types.map((typeItem, index) => (
          <li
            key={index}
            className={`transition-all ${
              type === typeItem
                ? 'grayscale-0 hover:grayscale-0'
                : 'grayscale-[75%] hover:grayscale-[25%]'
            } w-max md:mx-auto`}
          >
            <button
              aria-label={`Filter by ${typeItem} pokemons`}
              onClick={() => handleTypeChange(typeItem)}
            >
              <IconType name={typeItem} />
            </button>
          </li>
        ))}
      </MenuUl>
    </div>
  );
};
