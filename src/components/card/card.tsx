import React from 'react';
import { View } from 'react-native';
import { miUiStyle } from '../../themes';
import BackgroundGradient from './backgroundGradient';
import type { CardProps } from './card.type';
import { useCard } from './useCard';

const Card: React.FC<CardProps> = (props) => {
  const {
    height,
    width,
    canvasPadding,
    CARD_WIDTH,
    CARD_HEIGHT,
    backgroundColor,
    cardRadius,
    borderColors,
    borderWidth,
    blur,
  } = useCard({
    ...props,
  });
  return (
    <View>
      <BackgroundGradient
        height={height}
        width={width}
        canvasPadding={canvasPadding}
        cardRadius={cardRadius}
        borderColors={borderColors}
        blur={blur}
      />
      <View
        style={[
          miUiStyle.cardStyle.cardView.card,
          {
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            backgroundColor: backgroundColor,
            borderRadius: cardRadius,
            top: (canvasPadding + borderWidth) / 2,
            left: (canvasPadding + borderWidth) / 2,
          },
        ]}
      >
        {props.children}
      </View>
    </View>
  );
};

export default Card;
