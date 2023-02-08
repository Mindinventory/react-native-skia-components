import React from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';

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
    buttonWidth,
    styles,
  } = useSwipeActionButton({ props });

  const showActivityIndicator = () => {
    if (activityIndicator) {
      return (
        <View style={styles.swipeActionButtonStyle.customIndicator}>
          {activityIndicator}
        </View>
      );
    } else {
      return (
        <ActivityIndicator
          animating={isLoading}
          style={styles.swipeActionButtonStyle.activityIndicator}
          color={progressColor}
          size={'small'}
        />
      );
    }
  };
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
                inputRange: [0, buttonWidth],
                outputRange: [0, buttonWidth],
              })
            : buttonWidth,
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

      {isLoading && showActivityIndicator()}

      {!animationCompleted && (
        <SwipeButtonText
          width={buttonWidth}
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
