import React, { createContext, useMemo } from 'react';

import type { StarWarButtonProps } from '../components/starWarButton/starWarButton.type';
import { miColor, miUiStyle } from '../themes';

export * from './useMiUiContext';

export type MiUiContextType = {
  colors: typeof miColor;
  styles: typeof miUiStyle;
  props: StarWarButtonProps;
};

export const MiUiContext = createContext<MiUiContextType | undefined>(
  undefined
);

export interface MiUiProviderPropsType {
  children: JSX.Element;
  props: any;
}

export const MiUiProvider = ({ children, props }: MiUiProviderPropsType) => {
  const miUiContext = useMemo(() => {
    return {
      colors: miColor,
      props,
      styles: miUiStyle,
    };
  }, [props]);

  return (
    <MiUiContext.Provider value={miUiContext}>{children}</MiUiContext.Provider>
  );
};
