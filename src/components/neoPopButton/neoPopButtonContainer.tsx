import React from 'react';

import { MiUiProvider } from '../../context';
import NeoPopButtonComponent from './neoPopButton';
import type { NeoPopButtonProps } from './neoPopButton.type';

export const NeoPopButton: React.FC<NeoPopButtonProps> = (
  props: NeoPopButtonProps
) => (
  <MiUiProvider props={props}>
    <NeoPopButtonComponent />
  </MiUiProvider>
);