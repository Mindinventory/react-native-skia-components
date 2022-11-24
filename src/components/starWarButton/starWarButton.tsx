/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import {
  BlurMask,
  Canvas,
  LinearGradient,
  RadialGradient,
  RoundedRect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import Animated, {
  Easing,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { GradientTypes } from './starWarButton.type';
import { useStarWarButton } from './useStarWarButton';

export const StarWarButtonComponent = () => {
  const {
    blurRadius,
    buttonBorderRadius,
    canvasButtonHeight,
    canvasButtonWidth,
    canvasPadding,
    colors,
    filled,
    gradientType,
    height,
    styles,
    textStyle,
    title,
    titleColor,
    width,
    props,
    titleSize,
    style,
    scale,
    scaledButton,
    transformAnimation,
    gradient,
    opacity,
  } = useStarWarButton();

  useDerivedValue(() => {
    if (scale.value === 0.85) {
      scale.value = withTiming(1, {
        duration: 500,
        easing: Easing.linear,
      });
    }

    if (opacity.value === 0) {
      opacity.value = withTiming(1, {
        duration: 500,
        easing: Easing.linear,
      });
    }
  }, [scale.value, opacity.value]);

  return (
    <Animated.View style={[{ flex: 1 }, scaledButton, style]}>
      <Pressable
        style={[styles.starWarButtonStyle.container || {}]}
        onPress={() => {
          scale.value = withTiming(0.85, {
            duration: 500,
            easing: Easing.linear,
          });
          opacity.value = withTiming(0, {
            duration: 500,
            easing: Easing.linear,
          });
          props.onPress && props.onPress();
        }}
        onLongPress={() => {
          props.onLongPress && props.onLongPress();
        }}
        onPressIn={() => {
          props.onPressIn?.();
        }}
        onPressOut={() => {
          props.onPressOut?.();
        }}
      >
        <Canvas
          style={[
            {
              height: canvasButtonHeight + canvasPadding,
              width: canvasButtonWidth + canvasPadding,
            },
          ]}
          children={
            <RoundedRect
              x={canvasPadding / 2}
              y={canvasPadding / 2}
              height={canvasButtonHeight}
              width={canvasButtonWidth}
              r={buttonBorderRadius}
            >
              {gradientType === GradientTypes.Sweep && (
                <SweepGradient
                  origin={vec(
                    (canvasButtonWidth + canvasPadding) / 2,
                    (canvasButtonHeight + canvasPadding) / 2
                  )}
                  c={vec(gradient?.center?.x, gradient?.center?.y)}
                  colors={colors}
                  transform={transformAnimation}
                />
              )}
              {gradientType === GradientTypes.Radial && (
                <RadialGradient
                  origin={vec(
                    (canvasButtonWidth + canvasPadding) / 2,
                    (canvasButtonHeight + canvasPadding) / 2
                  )}
                  c={vec(gradient?.center?.x, gradient?.center?.y)}
                  r={gradient?.radius}
                  colors={colors}
                  transform={transformAnimation}
                />
              )}
              {gradientType === GradientTypes.Linear && (
                <LinearGradient
                  origin={vec(
                    (canvasButtonWidth + canvasPadding) / 2,
                    (canvasButtonHeight + canvasPadding) / 2
                  )}
                  start={vec(gradient?.start?.x, gradient?.start?.y)}
                  end={vec(gradient?.end?.x, gradient?.end?.y)}
                  colors={colors}
                  transform={transformAnimation}
                />
              )}
              <BlurMask blur={blurRadius} style={filled} />
            </RoundedRect>
          }
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
        />
        <View
          style={[
            {
              alignItems: 'center',
              height: height,
              justifyContent: 'center',
              position: 'absolute',
              width: width,
            },
          ]}
        >
          <Text
            style={[
              {
                color: titleColor,
                fontSize: titleSize,
                fontWeight: 'bold',
              },
              textStyle && { ...textStyle },
            ]}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};
