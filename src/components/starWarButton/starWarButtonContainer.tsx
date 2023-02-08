import React from 'react';

import { StarWarButtonComponent } from './starWarButton';
import type { StarWarButtonProps } from './starWarButton.type';
import { MiUiProvider } from '../../context';

export const StarWarButton = (props: StarWarButtonProps) => (
  <MiUiProvider>
    <StarWarButtonComponent {...props} />
  </MiUiProvider>
);
