import React from 'react';

import BottomSheeetComponent from './bottomSheeet';
import { MiUiProvider } from '../../context';

export const BottomSheeet = (props: any) => (
  <MiUiProvider>
    <BottomSheeetComponent {...props} />
  </MiUiProvider>
);
