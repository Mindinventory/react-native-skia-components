import React, { FC } from 'react';
import { Animated } from 'react-native';

import type { SwipeButtonTextProps } from './SwipeActionButton.type';
import { useMiUiContext } from '../../context';

export const SwipeButtonText: FC<SwipeButtonTextProps> = ({
  translateX,
  title,
  textStyle,
  customText,
  width,
}) => {
  const { styles } = useMiUiContext();
  return (
    <Animated.View
      style={[
        styles.swipeActionButtonStyle.titleContainer,
        {
          opacity: translateX.interpolate({
            inputRange: [0, width - 50, width],
            outputRange: [1, 0.3, 0],
          }),
          transform: [
            {
              translateX: translateX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 60],
              }),
            },
          ],
        },
      ]}
    >
      {customText ? (
        customText
      ) : (
        <Animated.Text
          numberOfLines={2}
          allowFontScaling={false}
          style={[styles.swipeActionButtonStyle.title, textStyle]}
        >
          {title}
        </Animated.Text>
      )}
    </Animated.View>
  );
};

