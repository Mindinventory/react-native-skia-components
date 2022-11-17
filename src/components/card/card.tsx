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
  const CARD_VIEW_MARGIN = canvasPadding + borderWidth;
  return (
    <>
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
            left: CARD_VIEW_MARGIN / 2,
            top: CARD_VIEW_MARGIN / 2,
            width: CARD_WIDTH,
          },
        ]}
      >
        {props.children}
      </View>
    </>
  );
};

export default Card;
