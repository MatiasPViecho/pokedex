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
    <MenuUl classes="bg-white w-full rounded-sm">
      <li>
        <input
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
      </li>
      {types.map((typeItem, index) => (
        <li
          key={index}
          className={`${type === typeItem ? '' : 'grayscale'}`}
        >
          <button onClick={() => handleTypeChange(typeItem)}>
            <IconType name={typeItem} />
          </button>
        </li>
      ))}
      {name}
    </MenuUl>
  );
};
