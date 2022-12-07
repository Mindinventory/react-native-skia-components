import React from 'react';

import { MiUiProvider } from '../../context';
import FloatingButtonComponent from './floatingButton';
import type { FloatingButtonProps } from './floatingButton.type';

export const FloatingButton = (props: FloatingButtonProps) => (
  <MiUiProvider>
    <FloatingButtonComponent {...props} />
  </MiUiProvider>
);
