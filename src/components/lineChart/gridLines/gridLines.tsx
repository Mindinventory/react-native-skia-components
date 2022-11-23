import React from 'react';

import { DashPathEffect, Line, vec } from '@shopify/react-native-skia';

import type { GridLineProps } from '../LineChartProps';

const GridLines = (props: GridLineProps) => {
  const { xAxisData, yAxisData, graphHeight, x, y, graphWidth, gridStyle } =
    props;
  const { color, style, strokeWidth, dashedOpacity, isDotedGridLine } =
    gridStyle;

  return (
    <>
      {xAxisData &&
        xAxisData.map((item, index) => {
          return (
            <Line
              p1={vec(x(item), 0)}
              p2={vec(x(item), graphHeight + 5)}
              color={color}
              key={index.toString()}
              style={style}
              strokeWidth={strokeWidth}
              opacity={dashedOpacity}
            >
              {isDotedGridLine && <DashPathEffect intervals={[5, 5]} />}
            </Line>
          );
        })}

      {yAxisData &&
        yAxisData.map((item, index) => {
          return (
            <Line
              p1={vec(30, y(item) - 2)}
              p2={vec(graphWidth - 10, y(item) - 2)}
              color={color}
              key={index.toString()}
              style={style}
              strokeWidth={strokeWidth}
              opacity={dashedOpacity}
            >
              {isDotedGridLine && <DashPathEffect intervals={[5, 5]} />}
            </Line>
          );
        })}
    </>
  );
};

export default GridLines;
