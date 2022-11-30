import React from 'react';

import { MiUiProvider } from '../../context';
import NeoPopButtonComponent from './neoPopButton';
import type { NeoPopButtonProps } from './neoPopButton.type';

export const NeoPopButton = (props: NeoPopButtonProps) => (
  <MiUiProvider>
    <NeoPopButtonComponent {...props} />
  </MiUiProvider>
);
