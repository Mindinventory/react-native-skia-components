import React from 'react';

import { Line, vec } from '@shopify/react-native-skia';

import { STARTING_POINT } from '../../../utils/graphUtils';
import type { AxisProps } from '../LineChartProps';

const Axis = (props: AxisProps) => {
  const { graphHeight, graphWidth, axisStyle, graphMargin, fullWidthPreview } =
    props;
  const { color, style, strokeWidth } = axisStyle;

  return (
    <>
      <Line
        p1={vec(fullWidthPreview ? 0 : graphMargin, graphHeight - 22)}
        p2={vec(graphWidth, graphHeight - 22)}
        color={color}
        style={style}
        strokeWidth={strokeWidth}
      />

      {!fullWidthPreview && (
        <Line
          p1={vec(graphMargin, graphHeight - 23)}
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
