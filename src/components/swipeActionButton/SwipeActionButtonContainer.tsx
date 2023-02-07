import React from 'react';

import type { SwipeActionButtonProps } from './SwipeActionButton.type';
import SwipeActionButtonComponent from './SwipeActionButtonComponent';
import { MiUiProvider } from '../../context';

export const SwipeActionButton = (props: SwipeActionButtonProps) => (
  <MiUiProvider>
    <SwipeActionButtonComponent {...props} />
  </MiUiProvider>
);
