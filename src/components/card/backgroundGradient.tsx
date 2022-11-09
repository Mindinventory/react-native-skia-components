import React from 'react';
import {
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
  BlurMask,
} from '@shopify/react-native-skia';

interface BackgroundGradientProps {
  height: number;
  width: number;
  canvasPadding: number;
  cardRadius?: number;
  borderColors: string[];
}

const BackgroundGradient = (props: BackgroundGradientProps) => {
  const { width, height, canvasPadding, cardRadius, borderColors } = props;
  return (
    <Canvas
      style={{ width: width + canvasPadding, height: height + canvasPadding }}
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
          c={vec((width + canvasPadding) / 2, (height + canvasPadding) / 2)}
          colors={borderColors}
        />
        <BlurMask blur={10} style="solid" />
      </RoundedRect>
    </Canvas>
  );
};

export default BackgroundGradient;
