import React, { FC } from 'react';
import { Animated } from 'react-native';

import type { SwipeButtonCircleProps } from './SwipeActionButton.type';
import { useMiUiContext } from '../../context';

export const SwipeButtonCircle: FC<SwipeButtonCircleProps> = ({
  translateX,
  panHandlers,
  Icon,
  circleBackgroundColor,
  borderRadius,
  height,
  scrollDistance,
}) => {
  const { styles, colors } = useMiUiContext();
  return (
    <Animated.View
      {...panHandlers}
      style={[
        styles.swipeActionButtonStyle.mainContainerCircle,
        {
          backgroundColor: circleBackgroundColor
            ? circleBackgroundColor
            : colors.red,
          borderRadius,
          transform: [{ translateX: translateX }],
          width: height,
        },
      ]}
    >
      {Icon ? (
        Icon
      ) : (
        <Animated.Image
          style={[
            {
              height: height / 2,
              width: height / 2,
            },
            {
              transform: [
                {
                  rotateY: translateX.interpolate({
                    inputRange: [0, scrollDistance],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            },
          ]}
          source={require('../../assets/buttonIcon.png')}
        />
      )}
    </Animated.View>
  );
};

