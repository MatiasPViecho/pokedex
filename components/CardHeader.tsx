import React from 'react';
import { IconType } from './IconType';
interface ICardHeader {
  hp: number;
  name: string;
  type: string | null;
}
const CardHeader = ({ hp, name, type }: ICardHeader) => (
  <div
    className={`w-full font-bold uppercase flex items-end bg-gradient-to-r rounded-tl-full border-gray-700/30 border-x-4 border-y-2 rounded-br-full from-${type} from-60% to-${type}-opaque to-70%  px-2 relative`}
  >
    <span className={`text-lg pl-8 flex-1 h-full pr-2`}>{name}</span>
    <div className={`flex gap-1 items-top pr-2`}>
      <span className="text-xs self-end">hp</span>
      <span className="text-2xl">{hp}</span>
      <div
        className={`p-1 w-max max-w-5 max-h-5 mt-1 bg-${type} rounded-full flex justify-center items-center`}
      >
        {type ? <IconType name={type} /> : <></>}
      </div>
    </div>
  </div>
);
export default React.memo(CardHeader);
