import React from 'react';

import { MiUiProvider } from '../../context';
import SwipableCardComponent from './SwipableCardComponent';
import type { SwipableCardsProps } from './swipableCards.type';

const SwipableCard: React.FC<SwipableCardsProps> = (props) => {
  return (
    <MiUiProvider>
      <SwipableCardComponent {...props} />
    </MiUiProvider>
  );
};

export default SwipableCard;
