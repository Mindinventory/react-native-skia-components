import React from 'react';

import { MiUiProvider } from '../../context';
import CircularProgressBarComponent from './circularProgressBar';
import type { CircularProgressBarProps } from './circularProgressBar.type';

export const CircularProgressBar = (props: CircularProgressBarProps) => (
  <MiUiProvider props={props}>
    <CircularProgressBarComponent />
  </MiUiProvider>
);
