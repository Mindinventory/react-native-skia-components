import React from 'react';

import {
  Circle,
  DashPathEffect,
  Group,
  Line,
  Paint,
  vec,
} from '@shopify/react-native-skia';
import type { CursorProps } from '../barChartProps';
import { useCursor } from './useCursor';

export const Cursor = (props: CursorProps) => {
  const {
    color,
    gradientColor,
    graphHeight,
    graphWidth,
    selectedPositions,
    strokeWidth,
    style,
    transform,
  } = useCursor(props);

  return (
    <>
      <Group transform={transform}>
        <Circle cx={0} cy={0} r={7} color={gradientColor}>
          <Paint style={style} strokeWidth={strokeWidth} color={color} />
        </Circle>

        {selectedPositions ? (
          <Line
            p1={vec(0, -selectedPositions.translateY)}
            p2={vec(0, -selectedPositions.translateY + graphHeight + 5)}
            color="black"
            strokeWidth={1}
            // eslint-disable-line react-native/no-inline-styles
            style="fill"
          >
            <DashPathEffect intervals={[5, 5]} />
          </Line>
        ) : null}

        {selectedPositions ? (
          <Line
            p1={vec(graphWidth, 0)}
            p2={vec(-selectedPositions.translateX + 30, 0)}
            color="black"
            strokeWidth={1}
            // eslint-disable-next-line
            style="fill"
          >
            <DashPathEffect intervals={[5, 5]} />
          </Line>
        ) : null}
      </Group>
    </>
  );
};
