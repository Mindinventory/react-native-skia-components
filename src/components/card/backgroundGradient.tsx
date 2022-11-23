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
  return (
    <Canvas
      style={{ height: height + canvasPadding, width: width + canvasPadding }}
      children={
        <>
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
            <BlurMask blur={blur} style={'solid'} />
          </RoundedRect>
        </>
      }
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
    />
  );
};

export default BackgroundGradient;
