import React, { FC } from 'react';
import { ActivityIndicator, Animated } from 'react-native';

import type { SwipeActionButtonProps } from './SwipeActionButton.type';
import { SwipeButtonCircle } from './SwipeButtonCircle';
import { SwipeButtonText } from './SwipeButtonText';
import useSwipeActionButton from './useSwipeActionButton';
import {
  DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
} from '../../../example/src/constant/constant';
import { useMiUiContext } from '../../context';

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
  const { styles } = useMiUiContext();

  return (
    <Animated.View
      style={[
        containerStyle,
        styles.swipeActionButtonStyle.mainContainer,
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
          style={styles.swipeActionButtonStyle.activityIndicator}
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

export default SwipeActionButton;
