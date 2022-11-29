import React from 'react';

import { DashPathEffect, Line, vec } from '@shopify/react-native-skia';

import type { GridLineProps } from '../barChartProps';

const GridLines = ({
  xAxisData,
  yAxisData,
  graphHeight,
  x,
  y,
  graphWidth,
  gridStyle,
}: GridLineProps) => {
  const { color, style, strokeWidth, dashedOpacity, isDotedGridLine } =
    gridStyle;
  return (
    <>
      {xAxisData &&
        xAxisData.map((item, index) => {
          return (
            <Line
              p1={vec(x(item) + 5, 0)}
              p2={vec(x(item) + 5, graphHeight + 5)}
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
              p1={vec(30, y(item) - 5)}
              p2={vec(graphWidth - 10, y(item) - 5)}
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
