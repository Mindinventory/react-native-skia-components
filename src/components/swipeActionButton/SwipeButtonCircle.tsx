import React, { FC } from 'react';
import { Animated, GestureResponderHandlers, StyleSheet } from 'react-native';

interface SwipeButtonCircle {
  panHandlers: GestureResponderHandlers;
  Icon?: JSX.Element;
  translateX: Animated.Value;
  circleBackgroundColor?: string;
  borderRadius?: number;
  height: number;
  scrollDistance: number;
}
export const SwipeButtonCircle: FC<SwipeButtonCircle> = ({
  translateX,
  panHandlers,
  Icon,
  circleBackgroundColor,
  borderRadius,
  height,
  scrollDistance,
}) => {
  return (
    <Animated.View
      {...panHandlers}
      style={[
        styles.mainContainer,
        {
          backgroundColor: circleBackgroundColor
            ? circleBackgroundColor
            : 'red',
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

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    zIndex: 2,
  },
});
