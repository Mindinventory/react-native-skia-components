import React, { FC } from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';

import type { SwipeActionButtonProps } from './SwipeActionButton.type';
import { SwipeButtonCircle } from './SwipeButtonCircle';
import { SwipeButtonText } from './SwipeButtonText';
import useSwipeActionButton from './useSwipeActionButton';

export const DEFAULT_HEIGHT = 70;
export const DEFAULT_WIDTH = Dimensions.get('window').width * 0.9;
export const DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE = 70;
const SwipeActionButton: FC<SwipeActionButtonProps> = ({
  completeThresholdPercentage = DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE,
  onComplete,
  width = DEFAULT_WIDTH,
  containerStyle,
  height = DEFAULT_HEIGHT,
  borderRadius = height / 2,
  title,
  textStyle,
  customText,
  icon,
  activityIndicator,
  circleBackgroundColor,
  backgroundColor,
  onError = false,
  setOnError,
  progressColor,
}) => {
  const {
    animationCompleted,
    isLoading,
    panResponser,
    translateWidth,
    scrollDistance,
    translateX,
  } = useSwipeActionButton(
    onComplete,
    onError,
    setOnError,
    width,
    completeThresholdPercentage,
    height
  );

  return (
    <Animated.View
      style={[
        containerStyle,
        styles.mainContainer,
        {
          backgroundColor: backgroundColor ? backgroundColor : 'white',
          borderRadius,
          height,
          width: animationCompleted
            ? translateWidth.interpolate({
                inputRange: [0, width],
                outputRange: [0, width],
              })
            : width,
        },
      ]}
    >
      {!animationCompleted && (
        <SwipeButtonCircle
          circleBackgroundColor={circleBackgroundColor}
          Icon={icon}
          scrollDistance={scrollDistance}
          borderRadius={borderRadius}
          translateX={translateX}
          panHandlers={panResponser().panHandlers}
          height={height}
        />
      )}

      {activityIndicator ? (
        activityIndicator
      ) : (
        <ActivityIndicator
          animating={isLoading}
          style={styles.activityIndicator}
          color={progressColor}
          size={'small'}
        />
      )}

      {!animationCompleted && (
        <SwipeButtonText
          width={width}
          customText={customText}
          translateX={translateX}
          title={title}
          textStyle={textStyle}
        />
      )}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  activityIndicator: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  mainContainer: {
    flexDirection: 'row',
    padding: 2,
  },
});
export default SwipeActionButton;
