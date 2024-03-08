import { ChangeEvent } from 'react';
import { MenuUl } from './Menu';
import { create } from 'zustand';

interface FilterState {
  name: string;
  change: (by: string) => void;
}
export const useFilterStore = create<FilterState>((set) => ({
  name: '',
  change: (by) => set((state) => ({ name: by })),
}));
export const FilterMenu = () => {
  const { name, change } = useFilterStore();
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
      <input
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      {name}
    </MenuUl>
  );
};
