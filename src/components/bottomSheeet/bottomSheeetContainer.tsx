import React from 'react';

import BottomSheeetComponent from './bottomSheeet';
import type { BottomSheeetProps } from './bottomSheeet.type';
import { MiUiProvider } from '../../context';

export const BottomSheeet = (props: BottomSheeetProps) => (
  <MiUiProvider>
    <BottomSheeetComponent {...props} />
  </MiUiProvider>
);
