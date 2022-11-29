import { useState } from 'react';

import {
  interpolateColors,
  useComputedValue,
} from '@shopify/react-native-skia';

import { COLORS } from '../../utils/getXY';
import type { CursorProps, SelectedPositions } from '../barChartProps';

export const useCursor = (props: CursorProps) => {
  const { cursorStyle, graphHeight, graphWidth, width, xLabel, yLabel } = props;
  const { color, style, strokeWidth } = cursorStyle;

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

  return {
    color,
    gradientColor,
    graphHeight,
    graphWidth,
    selectedPositions,
    strokeWidth,
    style,
    transform,
  };
};
