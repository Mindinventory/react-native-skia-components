import React from 'react';

import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  useComputedValue,
  useTiming,
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

  const progress = useTiming({
    from: 0,
    loop: true,
    to: 6,
    // yoyo: true,
  });

  const transform = useComputedValue(
    () => [{ rotate: progress.current }],
    [progress]
  );

  return (
    <Canvas
      style={{
        height: height + canvasPadding,
        width: width + canvasPadding,
      }}
      children={
        <RoundedRect
          x={canvasPadding / 2}
          y={canvasPadding / 2}
          width={width}
          height={height}
          color="gold"
          r={cardRadius}
        >
          <SweepGradient
            origin={vec(
              (width + canvasPadding) / 2,
              (height + canvasPadding) / 2
            )}
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
