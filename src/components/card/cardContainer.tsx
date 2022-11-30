import React from 'react';

import { MiUiProvider } from '../../context';
import CardComponent from './card';
import type { CardProps } from './card.type';

export const Card = (props: CardProps) => (
  <MiUiProvider>
    <CardComponent {...props} />
  </MiUiProvider>
);
