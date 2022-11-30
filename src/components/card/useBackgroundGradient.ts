import { useMemo } from 'react';

import {
  Easing,
  useComputedValue,
  useTiming,
} from '@shopify/react-native-skia';

import { AnimateBorderType, BackgroundGradientProps } from './card.type';

export const useBackgroundGradient = (props: BackgroundGradientProps) => {
  const {
    blur,
    borderColors,
    canvasPadding,
    cardRadius,
    height,
    width,
    animateBorder,
    duration,
  } = props;

  const progressToValue = useMemo(
    () =>
      animateBorder === AnimateBorderType.NORMAL ||
      animateBorder === AnimateBorderType.YOYO
        ? 6.3
        : 50,
    [animateBorder]
  );

  const progress = useTiming(
    {
      from: 0,
      loop: true,
      to: progressToValue,
      yoyo: AnimateBorderType.YOYO ? true : false,
    },
    {
      duration: duration,
      easing: Easing.linear,
    }
  );

  const transform = useComputedValue(
    () =>
      animateBorder !== AnimateBorderType.NONE
        ? [{ rotate: progress.current }]
        : undefined,
    [progress, animateBorder]
  );

  const CANVAS_WIDTH = width + canvasPadding;
  const CANVAS_HEIGHT = height + canvasPadding;

  return {
    animateBorder,
    blur,
    borderColors,
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    canvasPadding,
    cardRadius,
    duration,
    height,
    progress,
    progressToValue,
    transform,
    width,
  };
};
