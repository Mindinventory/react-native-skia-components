import React, { FC } from 'react';
import { Animated, GestureResponderHandlers } from 'react-native';

interface SwipeButtonCircle {
  /**
   * GestureHandlers for when swiping the button
   */
  panHandlers: GestureResponderHandlers;

  /**
   * Element that should be displaied inside the button
   */
  Icon?: JSX.Element;

  /**
   * Determinates the value of the button
   */
  translateX: Animated.Value;

  /**
   * Background color for the circle
   */
  circleBackgroundColor?: string;
  /**
   * The border radius of the container and the Icon
   *
   * @default (height / 2)
   */
  borderRadius?: number;
  /**
   * The height of the button
   * @default 70
   */
  height: number;
  /**
   * The scrollDistance is used to rotate the icon to 180deg
   * */
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
        {
          alignItems: 'center',
          backgroundColor: circleBackgroundColor
            ? circleBackgroundColor
            : 'red',
          borderRadius,
          height: '100%',
          justifyContent: 'center',
          transform: [{ translateX: translateX }],
          width: height,

          zIndex: 2,
        },
      ]}
    >
      {Icon ? (
        Icon
      ) : (
        <Animated.Image
          style={[
            {
              height: 30,
              width: 30,
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
