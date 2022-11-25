import {
  Easing,
  rect,
  rrect,
  Skia,
  useTiming,
} from '@shopify/react-native-skia';

import { miColor } from '../../themes';
import type { CircularProgressBarProps } from './circularProgressBar.type';

const CONTAINER_SIZE = 250;
const CONTAINER_ELEVATION = 8;
const PROGRESS_FONT_SIZE = 32;
const PADDING = 24;
const CIRCLE_PROGRESS = 25;
const CIRCLE_RADIUS = 100;
const SHADOW_OPACITY = 0.6;
const SHADOW_RADIUS = 10;
const SHADOW_WIDTH = 15;
const ARC_DEGREE = 270;
const ANIM_DURATION = 3000;

export const useCircularProgress = (props: CircularProgressBarProps) => {
  const {
    backgroundColor = miColor.circleBackground,
    colors = [miColor.blueShade, miColor.greenShade],
    containerSize = CONTAINER_SIZE,
    elevation = CONTAINER_ELEVATION,
    fontSize = PROGRESS_FONT_SIZE,
    gradientColors: gradientColors = [
      miColor.blackShade,
      miColor.darkGrayShade,
    ],
    padding = PADDING,
    progress = CIRCLE_PROGRESS,
    radius = CIRCLE_RADIUS,
    shadowColor = miColor.purple,
    shadowOffset = { height: 4, width: 0 },
    shadowOpacity = SHADOW_OPACITY,
    shadowRadius = SHADOW_RADIUS,
    strokeWidth = SHADOW_WIDTH,
  } = props;

  const size = containerSize;
  const viewWidth = size;
  const path = Skia.Path.Make();
  path.moveTo(strokeWidth, viewWidth / 2 - 50);
  path.addArc(
    {
      height: radius * 2,
      width: radius * 2,
      x: 0,
      y: 0,
    },
    ARC_DEGREE,
    (progress / 100) * 360
  );
  const fromCircle = (cx: number, cy: number, r: number) =>
    rrect(rect(cx - r, cy - r, 2 * r, 2 * r), r, r);

  const fillProgress = useTiming(
    { from: 0, to: progress },
    { duration: ANIM_DURATION, easing: Easing.circle }
  );

  return {
    backgroundColor,
    colors,
    elevation,
    fillProgress,
    fontSize,
    fromCircle,
    gradientColors,
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
