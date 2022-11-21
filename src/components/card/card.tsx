import React from 'react';
import { View } from 'react-native';

import { miUiStyle } from '../../themes';
import BackgroundGradient from './backgroundGradient';
import type { CardProps } from './card.type';
import { useCard } from './useCard';

const Card: React.FC<CardProps> = (props) => {
  const {
    backgroundColor,
    blur,
    borderColors,
    borderWidth,
    canvasPadding,
    CARD_HEIGHT,
    CARD_WIDTH,
    cardRadius,
    height,
    width,
  } = useCard({
    ...props,
  });
  return (
    <View>
      <BackgroundGradient
        blur={blur}
        borderColors={borderColors}
        canvasPadding={canvasPadding}
        cardRadius={cardRadius}
        height={height}
        width={width}
      />
      <View
        style={[
          miUiStyle.cardStyle.cardView.card,
          {
            backgroundColor: backgroundColor,
            borderRadius: cardRadius,
            height: CARD_HEIGHT,
            left: (canvasPadding + borderWidth) / 2,
            top: (canvasPadding + borderWidth) / 2,
            width: CARD_WIDTH,
          },
        ]}
      >
        {props.children}
      </View>
    </View>
  );
};

export default Card;
