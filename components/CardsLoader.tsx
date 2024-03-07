import { CardSkeleton } from './CardSkeleton';

export const CardsLoader = () => {
  return (
    <ul
      className={`no-scrollbar h-full flex py-8 px-2 gap-4 *:select-none overflow-x-scroll w-full sm:h-full sm:grid sm:grid-flow-col sm:grid-rows-2 md:grid-rows-3
    active:cursor-grabbing  cursor-grab sm:py-2 sm:px-6 sm:flex-1 mx-auto sm:max-h-max
    `}
    >
      {Array.from({ length: 20 }).map((_e, i) => (
        <li
          key={i}
          className="flex-shrink-0 sm:max-w-72 sm:max-h-[300px]"
        >
          <CardSkeleton key={i} />
        </li>
      ))}
    </ul>
  );
};
