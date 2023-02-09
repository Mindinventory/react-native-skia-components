import type { BottomSheeetProps } from './bottomSheeet.type';
import { useMiUiContext } from '../../context';

export const useBottomSheeet = ({}: { props: BottomSheeetProps }) => {
  const { styles } = useMiUiContext();
  return {
    styles,
  };
};
