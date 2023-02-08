import { useMiUiContext } from '../../context';

export const useBottomSheeet = () => {
  const { styles } = useMiUiContext();
  return {
    styles,
  };
};
