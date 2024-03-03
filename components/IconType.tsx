import { Types } from './Types';
import { capitalizeFirstLetter } from '@/helpers/Capitalize';
interface IconTypeProps {
  name: string;
}
export const IconType = ({ name }: IconTypeProps) => {
  const IconType = Types[capitalizeFirstLetter(name)];

  return typeof IconType !== 'undefined' ? <IconType /> : <></>;
};
