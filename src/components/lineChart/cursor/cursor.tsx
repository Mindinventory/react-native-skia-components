import React from 'react';

import {
  Circle,
  DashPathEffect,
  Group,
  Line,
  Paint,
  vec,
} from '@shopify/react-native-skia';

import {
  getDefaultMargin,
  GRAPH_MARGIN,
  STARTING_POINT,
} from '../../../utils/graphUtils';
import type { CursorProps } from '../LineChartProps';
import { useCursor } from './useCursor';

export const Cursor = (props: CursorProps) => {
  const {
    transform,
    selectedPositions,
    gradientColor,
    style,
    strokeWidth,
    cursorColor,
    graphHeight,
    graphWidth,
    lineColor,
    lineStrokeWidth,
    lineStyle,
  } = useCursor(props);

  return (
    <>
      <Group transform={transform}>
        <Circle cx={0} cy={0} r={7} color={gradientColor}>
          <Paint style={style} strokeWidth={strokeWidth} color={cursorColor} />
        </Circle>

        {selectedPositions && (
          <Line
            p1={vec(STARTING_POINT, -selectedPositions.translateY)}
            p2={vec(
              STARTING_POINT,
              -selectedPositions.translateY +
                graphHeight +
                getDefaultMargin(graphHeight)
            )}
            color={lineColor}
            strokeWidth={lineStrokeWidth}
            style={lineStyle}
          >
            <DashPathEffect intervals={[5, 5]} />
          </Line>
        )}

        {selectedPositions && (
          <Line
            p1={vec(graphWidth, STARTING_POINT)}
            p2={vec(
              -selectedPositions.translateX + GRAPH_MARGIN,
              STARTING_POINT
            )}
            color={lineColor}
            strokeWidth={lineStrokeWidth}
            style={lineStyle}
          >
            <DashPathEffect intervals={[5, 5]} />
          </Line>
        )}
      </Group>
    </>
  );
};
