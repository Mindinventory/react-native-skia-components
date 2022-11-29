import React from 'react';
import { View } from 'react-native';

import Animated from 'react-native-reanimated';

import BackgroundGradient from './backgroundGradient';
import { useCard } from './useCard';

const Card = () => {
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
    props,
    styles,
  } = useCard();

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
