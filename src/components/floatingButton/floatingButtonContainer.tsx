import React from 'react';

import { MiUiProvider } from '../../context';
import FloatingButtonComponent from './floatingButton';
import type { FloatingButtonProps } from './floatingButton.type';

export const FloatingButton: React.FC<FloatingButtonProps> = (
  props: FloatingButtonProps
) => (
  <MiUiProvider props={props}>
    <FloatingButtonComponent />
  </MiUiProvider>
);
