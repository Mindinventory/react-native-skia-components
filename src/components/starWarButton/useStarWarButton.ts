import { useMemo } from 'react';

import {
  useComputedValue,
  useTiming,
  Vector,
} from '@shopify/react-native-skia';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { useMiUiContext } from '../../context';
import { GradientTypes } from './starWarButton.type';

export const useStarWarButton = () => {
  const { styles, props } = useMiUiContext();

  const {
    style,
    gradientType = 'linear',
    filled = 'outer',
    textStyle,
    titleSize = 20,
    title = 'Button',
    width = 200,
    height = 100,
    blurRadius = 10,
    buttonBorderRadius = 10,
    titleColor = 'black',
    animation = true,
  } = props;

  const buttonWidth = width || 250;
  const buttonHeight = height || 200;
  const canvasButtonWidth = buttonWidth + 30;
  const canvasButtonHeight = buttonHeight + 30;

  const canvasPadding = 40;

  const colors: string[] = useMemo(
    () => (!Array.isArray(props.colors) ? [props.colors] : props.colors),
    [props.colors]
  );

  const gradient: {
    end: Vector;
    start: Vector;
    center?: Vector;
    radius: number;
  } = useMemo(() => {
    if (props.gradientType && props.gradientType === GradientTypes.Sweep) {
      return {
        center: props.center
          ? props.center
          : {
              x: (canvasButtonWidth + canvasPadding) / 2,
              y: (canvasButtonHeight + canvasPadding) / 2,
            },
      };
    }

    if (props.gradientType === GradientTypes.Radial) {
      return {
        center: props.center
          ? props.center
          : {
              x: (canvasButtonWidth + canvasPadding) / 2,
              y: (canvasButtonHeight + canvasPadding) / 2,
            },
        radius: props.radius ? props.radius : 150,
      };
    }

    if (props.gradientType === GradientTypes.Linear) {
      return {
        end: props.end
          ? props.end
          : { x: 0, y: (canvasButtonHeight + canvasPadding) / 2 },
        start: props.start
          ? props.start
          : {
              x: (canvasButtonWidth + canvasPadding) / 2,
              y: (canvasButtonWidth + canvasPadding) / 2,
            },
      };
    }

    return;
  }, [
    canvasButtonHeight,
    canvasButtonWidth,
    props.center,
    props.end,
    props.gradientType,
    props.radius,
    props.start,
  ]);

  const progress = useTiming({
    from: 0,
    loop: true,
    to: 6,
    // yoyo: true,
  });

  const transform = useComputedValue(
    () => [{ rotate: progress.current }],
    [progress]
  );

  const scale = useSharedValue(1);

  const scaledButton = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  }, [scale.value]);

  const transformAnimation = animation ? transform : undefined;

  return useMemo(() => {
    return {
      animation,
      blurRadius,
      buttonBorderRadius,
      canvasButtonHeight,
      canvasButtonWidth,
      canvasPadding,
      colors,
      filled,
      gradient,
      gradientType,
      height,
      progress,
      props,
      scale,
      scaledButton,
      style,
      styles,
      textStyle,
      title,
      titleColor,
      titleSize,
      transform,
      transformAnimation,
      width,
    };
  }, [
    animation,
    blurRadius,
    buttonBorderRadius,
    canvasButtonHeight,
    canvasButtonWidth,
    colors,
    filled,
    gradient,
    gradientType,
    height,
    progress,
    props,
    scale,
    scaledButton,
    style,
    styles,
    textStyle,
    title,
    titleColor,
    titleSize,
    transform,
    transformAnimation,
    width,
  ]);
};

// const center = props.center
//   ? props.center
//   : {
//       x: (canvasButtonWidth + canvasPadding) / 2,
//       y: (canvasButtonHeight + canvasPadding) / 2,
//     };

// const start = props.start
//   ? props.start
//   : {
//       x: (canvasButtonWidth + canvasPadding) / 2,
//       y: (canvasButtonWidth + canvasPadding) / 2,
//     };

// const end = props.end
//   ? props.end
//   : { x: 0, y: (canvasButtonHeight + canvasPadding) / 2 };

// return {
//   center: props.center
//     ? props.center
//     : {
//         x: (canvasButtonWidth + canvasPadding) / 2,
//         y: (canvasButtonHeight + canvasPadding) / 2,
//       },
//   end: props.end
//     ? props.end
//     : { x: 0, y: (canvasButtonHeight + canvasPadding) / 2 },
//   radius: props.radius ? props.radius : 150,
//   start: props.start
//     ? props.start
//     : {
//         x: (canvasButtonWidth + canvasPadding) / 2,
//         y: (canvasButtonWidth + canvasPadding) / 2,
//       },
// };
