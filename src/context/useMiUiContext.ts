import { useContext } from 'react';

import { MiUiContext } from '.';

export const useMiUiContext = () => {
  const context = useContext(MiUiContext);
  if (!context) throw Error('useMiUiContext must be used inside MiUiContext');
  return context;
};
