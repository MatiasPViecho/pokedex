export interface IRegion {
  name: string;
  id: number;
}

export const regions: IRegion[] = [
  {
    name: 'kanto',
    id: 1,
  },
  {
    name: 'johto',
    id: 2,
  },

  {
    name: 'hoenn',
    id: 3,
  },
  {
    name: 'sinnoh (original)',
    id: 4,
  },
  {
    name: 'sinnoh (extended)',
    id: 5,
  },
  {
    name: 'johto (updated)',
    id: 6,
  },
  {
    name: 'unova (original)',
    id: 7,
  },
  {
    name: 'unova (updated)',
    id: 8,
  },
  {
    name: 'all regions',
    id: 9,
  },
];
