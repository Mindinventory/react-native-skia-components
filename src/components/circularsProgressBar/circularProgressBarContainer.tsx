import React from 'react';

import CircularProgressBarComponent from './circularProgressBar';
import type { CircularProgressBarProps } from './circularProgressBar.type';
import { MiUiProvider } from '../../context';

export const CircularProgressBar = (props: CircularProgressBarProps) => (
  <MiUiProvider>
    <CircularProgressBarComponent {...props} />
  </MiUiProvider>
);
