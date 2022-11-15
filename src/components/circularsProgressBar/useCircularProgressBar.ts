import {
  Easing,
  rect,
  rrect,
  Skia,
  useTiming,
} from '@shopify/react-native-skia';

import type { CircularProgressBarProps } from './circularProgressBar.type';

export const useCircularProgress = (props: CircularProgressBarProps) => {
  const {
    backgroundColor = '#32363B',
    colors = ['#2FB8FF', '#9EECD9'],
    containerSize = 250, //Dimensions.get('window').width,
    elevation = 8,
    fontSize = 32,
    gradientColors: GradientColors = ['#101113', '#2B2F33'],
    padding = 24,
    progress = 25,
    radius = 100,
    shadowColor = '#31C',
    shadowOffset = { width: 0, height: 4 },
    shadowOpacity = 0.6,
    shadowRadius = 10,
    strokeWidth = 15,
  } = props;

  const size = containerSize;
  const viewWidth = size;
  const path = Skia.Path.Make();
  path.moveTo(strokeWidth, viewWidth / 2 - 50);
  path.addArc(
    {
      x: 0,
      y: 0,
      width: radius * 2,
      height: radius * 2,
    },
    270,
    // 360
    (progress / 100) * 360
  );
  const fromCircle = (cx: number, cy: number, r: number) =>
    rrect(rect(cx - r, cy - r, 2 * r, 2 * r), r, r);

  const fillProgress = useTiming(
    { from: 0, to: progress },
    { duration: 3000, easing: Easing.circle }
  );

  return {
    backgroundColor,
    colors,
    elevation,
    fillProgress,
    fontSize,
    fromCircle,
    GradientColors,
    padding,
    path,
    progress,
    radius,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    size,
    strokeWidth,
    viewWidth,
  };
};
