export interface IRegion {
  name: string;
  href: string;
  id: number;
}

export const regions: IRegion[] = [
  {
    name: 'kanto',
    href: '/kanto',
    id: 1,
  },
  {
    name: 'johto',
    href: '/johto',
    id: 2,
  },

  {
    name: 'hoenn',
    href: '/hoenn',
    id: 3,
  },
  {
    name: 'sinnoh (original)',
    href: '/sinnoh',
    id: 4,
  },
  {
    name: 'sinnoh (extended)',
    href: '/sinnoh/extended',
    id: 5,
  },
  {
    name: 'johto (updated)',
    href: '/johto/updated',
    id: 6,
  },
  {
    name: 'unova (original)',
    href: '/unova',
    id: 7,
  },
  {
    name: 'unova (updated)',
    href: '/unova/updated',
    id: 8,
  },
];
