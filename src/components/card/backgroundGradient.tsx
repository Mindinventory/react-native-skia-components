import React, { useMemo } from 'react';

import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  useComputedValue,
  useTiming,
  vec,
} from '@shopify/react-native-skia';
import { Easing } from 'react-native-reanimated';

import type { AnimateBorderTypes } from './card.type';

interface BackgroundGradientProps {
  blur?: number;
  borderColors?: string[];
  canvasPadding?: number;
  cardRadius?: number;
  height?: number;
  width?: number;
  animateBorder?: AnimateBorderTypes;
  duration?: number;
}

const BackgroundGradient = (props: BackgroundGradientProps) => {
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
    () => (animateBorder === 'NORMAL' || animateBorder === 'YOYO' ? 6.3 : 50),
    [animateBorder]
  );

  const progress = useTiming(
    {
      from: 0,
      loop: true,
      to: progressToValue,
      yoyo: animateBorder === 'YOYO' ? true : false,
    },
    {
      duration: duration,
      easing: Easing.linear,
    }
  );

  const transform = useComputedValue(
    () =>
      animateBorder !== 'NONE' ? [{ rotate: progress.current }] : undefined,
    [progress, animateBorder]
  );

  const CANVAS_WIDTH = width + canvasPadding;
  const CANVAS_HEIGHT = height + canvasPadding;

  return (
    <Canvas
      style={{
        height: CANVAS_HEIGHT,
        width: CANVAS_WIDTH,
      }}
      children={
        <RoundedRect
          x={canvasPadding / 2}
          y={canvasPadding / 2}
          width={width}
          height={height}
          color={'gold'}
          r={cardRadius}
        >
          <SweepGradient
            origin={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
            c={vec((width + canvasPadding) / 2, (height + canvasPadding) / 2)}
            colors={borderColors}
            transform={transform}
          />
          <BlurMask blur={blur} style={'solid'} />
        </RoundedRect>
      }
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
    />
  );
};

export default BackgroundGradient;
