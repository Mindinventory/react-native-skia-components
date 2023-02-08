import React from 'react';

import FloatingButtonComponent from './floatingButton';
import type { FloatingButtonProps } from './floatingButton.type';
import { MiUiProvider } from '../../context';

export const FloatingButton = (props: FloatingButtonProps) => (
  <MiUiProvider>
    <FloatingButtonComponent {...props} />
  </MiUiProvider>
);
