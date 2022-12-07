import React, { createContext, useMemo } from 'react';

import { miColor, miUiStyle } from '../themes';

export * from './useMiUiContext';

export type MiUiContextType = {
  colors: typeof miColor;
  styles: ReturnType<typeof miUiStyle>;
};

export const MiUiContext = createContext<MiUiContextType | undefined>(
  undefined
);

export interface MiUiProviderPropsType {
  children: JSX.Element;
}

export const MiUiProvider = ({ children }: MiUiProviderPropsType) => {
  const miUiContext = useMemo(() => {
    return {
      colors: miColor,
      styles: miUiStyle(),
    };
  }, []);

  return (
    <MiUiContext.Provider value={miUiContext}>{children}</MiUiContext.Provider>
  );
};
