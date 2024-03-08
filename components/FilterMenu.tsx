import { ChangeEvent } from 'react';
import { MenuUl } from './Menu';
import { create } from 'zustand';
import { typeEnum, types } from '@/helpers/Types';
import { IconType } from './IconType';
interface FilterState {
  name: string;
  type: typeEnum | null;
  change: (by: string) => void;
  changeType: (by: typeEnum) => void;
}
export const useFilterStore = create<FilterState>((set) => ({
  name: '',
  type: null,
  change: (by: string) => set((state) => ({ name: by })),
  changeType: (newType: typeEnum) => set((state) => ({ type: newType })),
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
  return (
    <MenuUl classes="bg-white w-full rounded-sm">
      <li>
        <input
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
      </li>
      {types.map((type, index) => (
        <li
          key={index}
          className=""
        >
          <IconType name={type} />
        </li>
      ))}
      {name}
    </MenuUl>
  );
};
