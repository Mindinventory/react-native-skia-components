import React from 'react';
import { ActivityIndicator, Animated } from 'react-native';

import type { SwipeActionButtonProps } from './SwipeActionButton.type';
import { SwipeButtonCircle } from './SwipeButtonCircle';
import { SwipeButtonText } from './SwipeButtonText';
import useSwipeActionButton from './useSwipeActionButton';

const SwipeActionButtonComponent = (props: SwipeActionButtonProps) => {
  const {
    activityIndicator,
    animationCompleted,
    backgroundColor,
    borderRadius,
    circleBackgroundColor,
    containerStyle,
    customText,
    height,
    icon,
    isLoading,
    panResponser,
    progressColor,
    scrollDistance,
    textStyle,
    title,
    translateWidth,
    translateX,
    width,
    styles,
  } = useSwipeActionButton({ props });

  return (
    <Animated.View
      style={[
        containerStyle,
        styles.swipeActionButtonStyle.mainContainer,
        {
          backgroundColor: backgroundColor,
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

export default SwipeActionButtonComponent;
