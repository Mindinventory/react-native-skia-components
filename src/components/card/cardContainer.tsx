import React from 'react';

import CardComponent from './card';
import type { CardProps } from './card.type';
import { MiUiProvider } from '../../context';

export const Card = (props: CardProps) => (
  <MiUiProvider>
    <CardComponent {...props} />
  </MiUiProvider>
);
