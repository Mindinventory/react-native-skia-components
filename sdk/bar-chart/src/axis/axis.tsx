import React from 'react';

import { Line, vec } from '@shopify/react-native-skia';

import type { AxisProps } from '../barChartProps';

const Axis = ({
  hideAxis,
  graphHeight,
  graphWidth,
  lineStyle,
  graphMargin,
}: AxisProps) => {
  const { color, style, strokeWidth } = lineStyle;
  return (
    <>
      {!hideAxis && (
        <Line
          p1={vec(graphMargin, graphHeight)}
          p2={vec(graphWidth, graphHeight)}
          color={color}
          style={style}
          strokeWidth={strokeWidth}
        />
      )}
      {!hideAxis && (
        <Line
          p1={vec(graphMargin, graphHeight)}
          p2={vec(graphMargin, 0)}
          color={color}
          style={style}
          strokeWidth={strokeWidth}
        />
      )}
    </>
  );
};

export default Axis;
