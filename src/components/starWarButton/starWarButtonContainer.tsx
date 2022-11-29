import React from 'react';

import { MiUiProvider } from '../../context';
import { StarWarButtonComponent } from './starWarButton';
import type { StarWarButtonProps } from './starWarButton.type';

export const StarWarButton = (props: StarWarButtonProps) => (
  <MiUiProvider props={props}>
    <StarWarButtonComponent />
  </MiUiProvider>
);
