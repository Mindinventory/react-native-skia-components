import React from 'react';

import { MiUiProvider } from '../../context';
import CardComponent from './card';
import type { CardProps } from './card.type';

export const Card: React.FC<CardProps> = (props: CardProps) => (
  <MiUiProvider>
    <CardComponent {...props} />
  </MiUiProvider>
);
