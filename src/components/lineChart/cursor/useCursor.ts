import { useState } from 'react';

import {
  interpolateColors,
  useComputedValue,
} from '@shopify/react-native-skia';

import { COLORS } from '../buildGraph';
import type { CursorProps, SelectedPositions } from '../LineChartProps';

export const useCursor = (prop: CursorProps) => {
  const { xLabel, yLabel, width, cursorStyle, graphHeight, graphWidth } = prop;

  const [selectedPositions, setSelectedPositions] =
    useState<SelectedPositions>();

  const gradientColor = useComputedValue(
    () =>
      interpolateColors(
        xLabel.current / width,
        COLORS.map((_, i) => i / COLORS.length),
        COLORS
      ),
    [xLabel]
  );

  const transform = useComputedValue(() => {
    setSelectedPositions({
      translateX: xLabel.current,
      translateY: yLabel.current,
    });
    return [{ translateX: xLabel.current }, { translateY: yLabel.current }];
  }, [xLabel, yLabel]);

  const {
    color: cursorColor,
    style,
    strokeWidth,
    cursorLineStyle,
  } = cursorStyle;

  return {
    cursorColor,
    gradientColor,
    graphHeight,
    graphWidth,
    lineColor: cursorLineStyle?.color,
    lineStrokeWidth: cursorLineStyle?.strokeWidth,
    lineStyle: cursorLineStyle?.style,
    selectedPositions,
    strokeWidth,
    style,
    transform,
  };
};
