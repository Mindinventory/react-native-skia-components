import React from 'react';
import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';

interface BackgroundGradientProps {
  blur: number;
  borderColors: string[];
  canvasPadding: number;
  cardRadius?: number;
  height: number;
  width: number;
}

const BackgroundGradient = (props: BackgroundGradientProps) => {
  const { blur, borderColors, canvasPadding, cardRadius, height, width } =
    props;
  const CANVAS_WIDTH = width + canvasPadding;
  const CANVAS_HEIGHT = height + canvasPadding;
  return (
    <Canvas
      style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
    >
      <RoundedRect
        x={canvasPadding / 2}
        y={canvasPadding / 2}
        width={width}
        height={height}
        color="gold"
        r={cardRadius}
      >
        <SweepGradient
          c={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
          colors={borderColors}
        />
        <BlurMask blur={blur} style="solid" />
      </RoundedRect>
    </Canvas>
  );
};

export default BackgroundGradient;
