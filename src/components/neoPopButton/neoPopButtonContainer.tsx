import React from 'react';

import NeoPopButtonComponent from './neoPopButton';
import type { NeoPopButtonProps } from './neoPopButton.type';
import { MiUiProvider } from '../../context';

export const NeoPopButton = (props: NeoPopButtonProps) => (
  <MiUiProvider>
    <NeoPopButtonComponent {...props} />
  </MiUiProvider>
);
