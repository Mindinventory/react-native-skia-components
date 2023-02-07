import { useEffect, useState } from 'react';
import {
  Animated,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';

import { DEFAULT_WIDTH } from './SwipeActionButton';

const useSwipeActionButton = (
  onComplete: () => void,
  onError: boolean,
  setOnError: (error: boolean) => void,
  width: number,
  completeThresholdPercentage: number,
  height: number
) => {
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

  return {
    animationCompleted,
    isLoading,
    panResponser,
    scrollDistance,
    translateWidth,
    translateX,
  };
};

export default useSwipeActionButton;
