import React from 'react';

import { Line, vec } from '@shopify/react-native-skia';

import { getDefaultMargin, STARTING_POINT } from '../../../utils/graphUtils';
import type { AxisProps } from '../LineChartProps';

const Axis = (props: AxisProps) => {
  const { hideAxis, graphHeight, graphWidth, axisStyle, graphMargin } = props;
  const { color, style, strokeWidth } = axisStyle;

  return (
    <>
      {!hideAxis && (
        <Line
          p1={vec(graphMargin, graphHeight + getDefaultMargin(graphHeight))}
          p2={vec(graphWidth, graphHeight + getDefaultMargin(graphHeight))}
          color={color}
          style={style}
          strokeWidth={strokeWidth}
        />
      )}
      {!hideAxis && (
        <Line
          p1={vec(graphMargin, graphHeight + getDefaultMargin(graphHeight))}
          p2={vec(graphMargin, STARTING_POINT)}
          color={color}
          style={style}
          strokeWidth={strokeWidth}
        />
      )}
    </>
  );
};

export default Axis;
