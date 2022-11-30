import React from 'react';

import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';

import type { BackgroundGradientProps } from './card.type';
import { useBackgroundGradient } from './useBackgroundGradient';

const BackgroundGradient = (props: BackgroundGradientProps) => {
  const {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    canvasPadding,
    width,
    height,
    cardRadius,
    borderColors,
    transform,
    blur,
  } = useBackgroundGradient(props);

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
