import { useCallback, useMemo } from 'react';

import {
  useComputedValue,
  useTiming,
  Vector,
} from '@shopify/react-native-skia';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { useMiUiContext } from '../../context';
import { miColor } from '../../themes';
import { FilledType, GradientType } from './starWarButton.type';

export const useStarWarButton = () => {
  const { styles, props } = useMiUiContext();

  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const {
    style,
    gradientType = GradientType.Linear,
    filled = FilledType.Solid,
    textStyle,
    titleSize = 20,
    title = 'Button',
    width = 200,
    height = 100,
    blurRadius = 10,
    buttonBorderRadius = 10,
    titleColor = miColor.black,
    animation = true,
    backgroundColor = '#ffffff',
    animationDuration = 3000,
    buttonEffectDuration = 250,
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
    if (props.gradientType && props.gradientType === GradientType.Sweep) {
      return {
        center: props.center
          ? props.center
          : {
              x: (canvasButtonWidth + canvasPadding) / 2,
              y: (canvasButtonHeight + canvasPadding) / 2,
            },
      };
    }

    if (props.gradientType === GradientType.Radial) {
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

    if (props.gradientType === GradientType.Linear) {
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

  const progress = useTiming(
    {
      from: 0,
      loop: true,
      to: 6.3,
    },
    {
      duration: animationDuration,
      easing: Easing.linear,
    }
  );

  const transform = useComputedValue(
    () => [{ rotate: progress.current }],
    [progress]
  );

  const scaledButton = useAnimatedStyle(() => {
    return {
      perspective: 300,
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  }, [scale.value, opacity.value]);

  const opacityButton = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, [opacity]);

  const transformAnimation = animation ? transform : undefined;

  const handlePress = useCallback(() => {
    scale.value = withSequence(
      withTiming(0.85, {
        duration: buttonEffectDuration,
        easing: Easing.linear,
      }),
      withTiming(1, {
        duration: buttonEffectDuration,
        easing: Easing.linear,
      })
    );

    opacity.value = withSequence(
      withTiming(0, {
        duration: buttonEffectDuration,
        easing: Easing.linear,
      }),
      withTiming(1, {
        duration: buttonEffectDuration,
        easing: Easing.linear,
      })
    );
    props.onPress?.();
  }, [buttonEffectDuration, opacity, props, scale]);

  return useMemo(() => {
    return {
      animation,
      backgroundColor,
      blurRadius,
      buttonBorderRadius,
      canvasButtonHeight,
      canvasButtonWidth,
      canvasPadding,
      colors,
      filled,
      gradient,
      gradientType,
      handlePress,
      height,
      opacity,
      opacityButton,
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
    opacity,
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
    backgroundColor,
    opacityButton,
    handlePress,
  ]);
};
