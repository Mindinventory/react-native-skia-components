import React from 'react';

import { Circle, Group, Text as SkiaText } from '@shopify/react-native-skia';

import type { SliderProps } from '../LineChartProps';
import { useSlider } from './useSlider';

export const Slider = (props: SliderProps) => {
  const {
    font,
    touchPos,
    textX,
    textY,
    label,
    innerColor,
    innerRadius = 7.5,
    outerColor,
    outerRadius = 10,
  } = useSlider(props);

  return (
    <>
      {font != null ? (
        <Group color={outerColor}>
          <Circle c={touchPos} r={outerRadius} />
          <Circle color={innerColor} c={touchPos} r={innerRadius} />
          <SkiaText font={font!} x={textX} y={textY} text={label} />
        </Group>
      ) : null}
    </>
  );
};
