import React, { createContext, useMemo } from 'react';

import type { NeoPopButtonProps } from '..';
import type { CardProps } from '../components/card/card.type';
import type { CircularProgressBarProps } from '../components/circularsProgressBar/circularProgressBar.type';
import type { FloatingButtonProps } from '../components/floatingButton/floatingButton.type';
import type { StarWarButtonProps } from '../components/starWarButton/starWarButton.type';
import { miColor, miUiStyle } from '../themes';

export * from './useMiUiContext';

export type MiUiContextType = {
  colors: typeof miColor;
  styles: ReturnType<typeof miUiStyle>;
  props: CardProps &
    StarWarButtonProps &
    NeoPopButtonProps &
    FloatingButtonProps &
    CircularProgressBarProps;
};

export const MiUiContext = createContext<MiUiContextType | undefined>(
  undefined
);

export interface MiUiProviderPropsType {
  children: JSX.Element;
  props: CardProps &
    StarWarButtonProps &
    NeoPopButtonProps &
    FloatingButtonProps &
    CircularProgressBarProps;
}

export const MiUiProvider = ({ children, props }: MiUiProviderPropsType) => {
  const miUiContext = useMemo(() => {
    return {
      colors: miColor,
      props,
      styles: miUiStyle(),
    };
  }, [props]);

  return (
    <MiUiContext.Provider value={miUiContext}>{children}</MiUiContext.Provider>
  );
};
