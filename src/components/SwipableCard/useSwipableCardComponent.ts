import { useEffect, useRef, useState } from 'react';
import { Animated, PanResponder, PanResponderGestureState } from 'react-native';

import { useMiUiContext } from '../../context';
import type { SwipableCardsProps } from './swipableCards.type';

export const useSwipableCardComponent = ({
  props,
}: {
  props: SwipableCardsProps;
}) => {
  const { styles } = useMiUiContext();

  const {
    animateAllDirection = false,
    cardHeight = styles.ScreenHeight - 220,
    cardSpace = 40,
    cardStackBottomSpace = 0,
    cardStackTopSpace = 70,
    cardView,
    cardWidth = styles.ScreenWidth - cardSpace,
    controlViews,
    data,
    fadeNextCardAnimation = false,
    leftOverlapView,
    onControlPress,
    onPress,
    overlayCardContainerStyle,
    rightOverlapView,
  } = props;

  const [cardItems, setCardItems] = useState<Array<any>>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const position = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    position.setValue({ x: 0, y: 0 });
  }, [currentIndex, position]);

  useEffect(() => {
    setCardItems(data);
  }, [data]);

  const updatePanGastureResponderStateValue = (
    gestureState: PanResponderGestureState
  ) => {
    if (gestureState.dx > 120) {
      Animated.spring(position, {
        delay: 0,
        toValue: { x: styles.ScreenWidth + 100, y: gestureState.dy },
        useNativeDriver: true,
      }).start(({ finished }) => {
        finished && setCurrentIndex((prev) => prev + 1);
      });
    } else if (gestureState.dx < -120) {
      Animated.spring(position, {
        delay: 0,
        toValue: { x: -styles.ScreenWidth - 100, y: gestureState.dy },
        useNativeDriver: true,
      }).start(({ finished }) => {
        finished && setCurrentIndex((prev) => prev + 1);
      });
    } else {
      position.setValue({
        x: 0,
        y: 0,
      });
      Animated.spring(position, {
        delay: 0,
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    }
  };

  const rotateCard = position.x.interpolate({
    extrapolate: 'extend',
    inputRange: [-styles.ScreenWidth, 0, styles.ScreenWidth],
    outputRange: ['-10deg', '0deg', '10deg'],
  });

  const likeOverlayOpacity = position.x.interpolate({
    extrapolate: 'extend',
    inputRange: [-styles.ScreenWidth / 2, 0, styles.ScreenWidth / 2],
    outputRange: [0, 0, 1],
  });
  const dislikeOverlayOpacity = position.x.interpolate({
    extrapolate: 'extend',
    inputRange: [-styles.ScreenWidth / 2, 0, styles.ScreenWidth / 2],
    outputRange: [1, 0, 0],
  });

  const nextCardOpactiy = position.x.interpolate({
    extrapolate: 'extend',
    inputRange: [-styles.ScreenWidth / 2, 0, styles.ScreenWidth / 2],
    outputRange: [1, 0, 1],
  });

  const nextCardScale = position.x.interpolate({
    extrapolate: 'extend',
    inputRange: [-styles.ScreenWidth / 2, 0, styles.ScreenWidth / 2],
    outputRange: [1, 0.99, 1],
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_evt, _gestureState) => {
        return true;
      },
      onPanResponderMove: (_evt, gestureState) => {
        position.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },
      onPanResponderRelease: (_evt, gestureState) => {
        updatePanGastureResponderStateValue(gestureState);
      },
      onPanResponderTerminationRequest(_e, _gestureState) {
        return false;
      },
    })
  ).current;

  return {
    animateAllDirection,
    cardHeight,
    cardItems,
    cardSpace,
    cardStackBottomSpace,
    cardStackTopSpace,
    cardView,
    cardWidth,
    controlViews,
    currentIndex,
    data,
    dislikeOverlayOpacity,
    fadeNextCardAnimation,
    getPositionX: position.x,
    getPositionY: position.y,
    leftOverlapView,
    likeOverlayOpacity,
    nextCardOpactiy,
    nextCardScale,
    onControlPress,
    onPress,
    overlayCardContainerStyle,
    panResponder,
    rightOverlapView,
    rotateCard,
    styles,
  };
};
