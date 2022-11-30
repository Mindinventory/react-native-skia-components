import React from 'react';
import { View } from 'react-native';

import Animated from 'react-native-reanimated';

import BackgroundGradient from './backgroundGradient';
import type { CardProps } from './card.type';
import { useCard } from './useCard';

const Card = (props: CardProps) => {
  const {
    backgroundColor,
    blur,
    borderColors,
    canvasPadding,
    CARD_HEIGHT,
    CARD_WIDTH,
    cardRadius,
    height,
    width,
    cardStyle,
    zIndex,
    style,
    animateBorder,
    duration,
    styles,
  } = useCard({ props });

  return (
    <View style={styles.cardStyle.container}>
      <BackgroundGradient
        blur={blur}
        borderColors={borderColors}
        canvasPadding={canvasPadding}
        cardRadius={cardRadius}
        height={height}
        width={width}
        animateBorder={animateBorder}
        duration={duration}
      />
      <Animated.View
        style={[
          styles.cardStyle.card,
          {
            backgroundColor: backgroundColor,
            borderRadius: cardRadius,
            height: CARD_HEIGHT,
            width: CARD_WIDTH,
            zIndex: zIndex,
          },
          cardStyle,
          style,
        ]}
      >
        {props.children}
      </Animated.View>
    </View>
  );
};

export default Card;
