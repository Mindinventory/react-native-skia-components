import React, { FC, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { SwipeButtonCircle } from './SwipeButtonCircle';
import { SwipeButtonText } from './SwipeButtonText';

interface SwipeActionButtonProps {
  onComplete: () => void;
  onError: boolean;
  setOnError: (error: boolean) => void;
  width?: number;

  disabled?: boolean;

  completeThresholdPercentage?: number;

  containerStyle?: StyleProp<ViewStyle>;

  height?: number;

  borderRadius?: number;
  title: string;

  textStyle?: StyleProp<TextStyle>;
  customText?: JSX.Element;
  icon?: JSX.Element;
  activityIndicator?: JSX.Element;
  circleBackgroundColor?: string;
  backgroundColor?: string;
}

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
}) => {
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);
  const [endReached, setEndReached] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [translateX] = useState<Animated.Value & { _value?: number }>(
    new Animated.Value(0)
  );
  const [translateWidth] = useState<Animated.Value & { _value?: number }>(
    new Animated.Value(DEFAULT_WIDTH)
  );

  const scrollDistance = width - height - 4;
  const completeThreshold =
    scrollDistance * (completeThresholdPercentage / 100);
  const animateToStart = () => {
    Animated.spring(translateX, {
      friction: 5,
      tension: 10,
      toValue: 0,
      useNativeDriver: false,
    }).start();

    return setEndReached(false);
  };
  useEffect(() => {
    if (onError) {
      setAnimationCompleted(false);
      setIsLoading(false);
      Animated.spring(translateWidth, {
        friction: 5,
        tension: 10,
        toValue: width,
        useNativeDriver: false,
      }).start();
      Animated.spring(translateX, {
        friction: 5,
        tension: 10,
        toValue: scrollDistance,
        useNativeDriver: false,
      }).start();
      onRelease();
      setOnError(!onError);
    }
  }, [onError, scrollDistance, setOnError, translateWidth, translateX, width]);
  const animateToEnd = () => {
    Animated.spring(translateX, {
      friction: 5,
      tension: 10,
      toValue: scrollDistance,
      useNativeDriver: false,
    }).start();
    Animated.spring(translateWidth, {
      friction: 5,
      tension: 10,
      toValue: height,
      useNativeDriver: false,
    }).start();
    setIsLoading(true);
    onComplete();
    return setEndReached(true);
  };

  const onMove = (
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    if (gestureState.dx < 0 || gestureState.dx > scrollDistance) {
      return Animated.event([{ dx: translateX }], { useNativeDriver: false })({
        ...gestureState,
        dx: gestureState.dx < 0 ? 0 : scrollDistance,
      });
    }
    return Animated.event([{ dx: translateX }], { useNativeDriver: false })(
      gestureState
    );
  };

  const onRelease = () => {
    if (endReached) {
      return animateToStart();
    }

    const isCompleted = translateX._value! >= completeThreshold;
    setAnimationCompleted(isCompleted);
    return isCompleted ? animateToEnd() : animateToStart();
  };
  const panResponser = () =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => false,
      onPanResponderMove: onMove,
      onPanResponderRelease: onRelease,
      onStartShouldSetPanResponder: () => false,
    });

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
