import React, { FC } from 'react';
import { Animated, StyleSheet } from 'react-native';

import type { SwipeButtonTextProps } from './SwipeActionButton.type';

export const SwipeButtonText: FC<SwipeButtonTextProps> = ({
  translateX,
  title,
  textStyle,
  customText,
  width,
}) => {
  return (
    <Animated.View
      style={[
        styles.titleContainer,
        {
          opacity: translateX.interpolate({
            inputRange: [0, 180, width],
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
          style={[styles.title, textStyle]}
        >
          {title}
        </Animated.Text>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    width: '50%',
  },
  titleContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
