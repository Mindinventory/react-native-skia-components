import { useCallback, useMemo } from 'react';

import { useComputedValue, useTiming } from '@shopify/react-native-skia';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { useMiUiContext } from '../../context';
import { StarWarButtonConstant } from './starWarButton.constant';
import { GradientType, StarWarButtonProps } from './starWarButton.type';

export const useStarWarButton = (props: StarWarButtonProps) => {
  const { styles } = useMiUiContext();

  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const {
    style,
    gradientType = StarWarButtonConstant.default.gradientType,
    filled = StarWarButtonConstant.default.filled,
    textStyle,
    titleSize = StarWarButtonConstant.default.titleSize,
    title = StarWarButtonConstant.default.title,
    width = StarWarButtonConstant.default.width,
    height = StarWarButtonConstant.default.height,
    blurRadius = StarWarButtonConstant.default.blurRadius,
    buttonBorderRadius = StarWarButtonConstant.default.buttonBorderRadius,
    titleColor = StarWarButtonConstant.default.titleColor,
    animation = StarWarButtonConstant.default.animation,
    backgroundColor = StarWarButtonConstant.default.backgroundColor,
    animationDuration = StarWarButtonConstant.default.animationDuration,
    buttonEffectDuration = StarWarButtonConstant.default.buttonEffectDuration,
  } = props;

  const buttonWidth = width;
  const buttonHeight = height;
  const canvasButtonWidth =
    buttonWidth + StarWarButtonConstant.default.buttonPadding;
  const canvasButtonHeight =
    buttonHeight + StarWarButtonConstant.default.buttonPadding;

  const canvasPadding = StarWarButtonConstant.default.canvasPadding;

  const colors: string[] = useMemo(
    () => (!Array.isArray(props.colors) ? [props.colors] : props.colors),
    [props.colors]
  );

  const gradient = useMemo(() => {
    if (props.gradientType === GradientType.SWEEP) {
      return {
        center: props.center
          ? props.center
          : {
              x: (canvasButtonWidth + canvasPadding) / 2,
              y: (canvasButtonHeight + canvasPadding) / 2,
            },
      };
    }

    if (props.gradientType === GradientType.RADIAL) {
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

    if (props.gradientType === GradientType.LINEAR) {
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
    canvasPadding,
    props.center,
    props.end,
    props.gradientType,
    props.radius,
    props.start,
  ]);

  const rotate = useTiming(
    {
      from: StarWarButtonConstant.default.rotateValueFrom,
      loop: true,
      to: StarWarButtonConstant.default.rotateValueTo,
    },
    {
      duration: animationDuration,
      easing: Easing.linear,
    }
  );

  const transform = useComputedValue(
    () => [{ rotate: rotate.current }],
    [rotate]
  );

  const scaledButton = useAnimatedStyle(() => {
    return {
      perspective: StarWarButtonConstant.default.perspective,
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
    progress: rotate,
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
};
